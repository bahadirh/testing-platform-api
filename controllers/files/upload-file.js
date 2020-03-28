const { File_ } = require('../../models')
const { minio } = require('../../utils')

const uploadFileHandler = (req, res, next) => {
  const files = Object.values(req.files).reduce(
    (acc, fileList) => acc.concat(fileList),
    []
  )

  Promise.all(
    // uploads files
    files.map(file => {
      return minio.uploadFile(req.session.userid, file.name, file.path)
    })
  )
    .then(_etags =>
      // records files
      Promise.all(
        files.map(file =>
          File_.create({ owner: req.session.userid, name: file.name })
        )
      )
    )
    .then(docs => res.json({ status: 'success', files: docs }))
    .catch(next)
}

module.exports = [uploadFileHandler]
