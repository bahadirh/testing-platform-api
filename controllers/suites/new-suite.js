const { Suite } = require('../../models')

const newSuiteHandler = (req, res, next) => {
  // TODO: validate that user owns the given app
  Suite.create({ ...req.fields, owner: req.session.userid })
    .then(doc => {
      res.status(201).json({
        status: 'success',
        suite: doc,
      })
    })
    .then(next)
    .catch(next)
}

const newSuiteErrorHandler = (error, req, res, next) => {
  res.status(400).json({ status: 'error', error: error.message })
  next(error)
}

module.exports = [newSuiteHandler, newSuiteErrorHandler]
