const { App, File_ } = require('../../models')
const { minioClient } = require('../../utils')
// TODO: make it more modular? takes about 30 secs to complete
const createAppHandler = (req, res, next) => {
  // creates an array of files sent
  const files = Object.values(req.files)
    .reduce((acc, curr) => acc.concat(curr), [])
    .slice(0, 1)
  // creates app instance
  App.create({
    // TODO: add json validation and replace that object with ...req.fields
    name: req.fields.name,
    version: req.fields.version,
    owner: req.session.userid,
  })
    .then(async doc => {
      // creates bucket for the user if nonexistent
      if (!(await minioClient.bucketExists(req.session.userid))) {
        await minioClient.makeBucket(req.session.userid)
      }
      // saves files sent to user's bucket
      Promise.all(
        files.map(file =>
          // TODO: add warning about that if there's a file with given name, it gets overwritten
          minioClient.fPutObject(req.session.userid, file.name, file.path)
        )
      )
        .then(etags =>
          // adds files to db
          Promise.all(
            files.map(file =>
              File_.create({ name: file.name, owner: req.session.userid })
            )
          )
        )
        // adds file instances' to app's file field
        .then(fileDocs =>
          App.findByIdAndUpdate(
            doc._id,
            {
              $push: { files: fileDocs.map(doc => doc._id) },
            },
            { new: true }
          )
        )
        // sends response
        .then(response => {
          res.json({ status: 'success', app: response })
        })
    })
    .catch(next)
}

const createAppErrorHandler = (error, req, res, next) => {
  // TODO: handle errors
  res.json({ status: 'error', message: error.message })
}
module.exports = { createAppHandler, createAppErrorHandler }
