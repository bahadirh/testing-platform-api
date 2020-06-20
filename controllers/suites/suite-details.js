const { Suite } = require('../../models')

const suiteDetailsHandler = (req, res, next) => {
  Suite.findById(req.params.id)
    .select('name app')
    .populate({
      path: 'app',
      select: 'name',
      retainNullValues: true,
    })
    .lean()
    .then(doc => {
      if (!doc) {
        const err = Error('No suite with given id.')
        err.name = 'NoEntryError'
        throw err
      } else {
        res.json({ status: 'success', suite: doc })
      }
    })
    .catch(next)
}

const suiteDetailsErrorHandler = (err, req, res, next) => {
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
module.exports = [suiteDetailsHandler, suiteDetailsErrorHandler]
