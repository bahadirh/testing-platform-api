const { Test } = require('../../models')

const testDetailsHandler = (req, res, next) => {
  Test.findOne({ _id: req.params.id, owner: req.session.userid })
    .select('platformVersion status result')
    .lean()
    .then(doc => {
      if (!doc) {
        const err = Error('No test with given id.')
        err.name = 'NoEntryError'
        throw err
      } else {
        res.json({ status: 'success', test: doc })
      }
    })
    .catch(next)
}

const testDetailsErrorHandler = (err, req, res, next) => {
  switch (err.name) {
    case 'CastError':
      res
        .status(400)
        .json({ status: 'error', message: 'Given id is not an ObjectID.' })
      break

    case 'NoEntryError':
      res.status(404).json({ status: 'error', message: err.message })
    default:
      next(err)
      break
  }
}
module.exports = [testDetailsHandler, testDetailsErrorHandler]
