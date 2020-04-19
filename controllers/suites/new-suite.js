const { Suite } = require('../../models')

const newSuiteHandler = (req, res, next) => {
  Suite.create(req.fields)
    .then((doc) => {
      res.status(201).json({
        status: 'success',
        suite: doc,
      })
    })
    .catch(next)
}

const newSuiteErrorHandler = (error, req, res, next) => {
  res.status(400).json({ status: 'error', error: error.message })
  next(error)
}

module.exports = [newSuiteHandler, newSuiteErrorHandler]
