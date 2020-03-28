const { File_ } = require('../../models')

const listFilesHandler = (req, res, next) => {
  File_.find({ owner: req.session.userid })
    .select('+name -__v -owner')
    .lean()
    .then(docs => {
      res.json({ status: 'success', files: docs })
    })
    .catch(next)
}
const listFilesErrorHandler = (err, req, res, next) => {
  console.error(err)
  next(err)
}
module.exports = [listFilesHandler, listFilesErrorHandler]
