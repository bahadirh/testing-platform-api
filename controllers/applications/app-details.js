const { App } = require('../../models')

const appDetailsHandler = (req, res, next) => {
  App.findById(req.params.id)
    .populate('files')
    .lean()
    .then(doc => {
      if (!doc) {
        const err = Error('No app with given id.')
        err.name = 'NoEntryError'
        throw err
      } else {
        res.json({ status: 'success', app: doc })
      }
    })
    .catch(next)
}

const appDetailsErrorHandler = (err, req, res, next) => {
  switch (err.name) {
    case 'CastError':
      res
        .status(400)
        .json({ status: 'error', message: 'Given id is not an ObjectID.' })
      break

    case 'NoEntryError':
      res.status(404).json({ status: 'error', message: err.message })
      break

    default:
      next(err)
      break
  }
}
module.exports = [appDetailsHandler, appDetailsErrorHandler]
