const { Case } = require('../../models')

const createCaseHandler = (req, res, next) => {
  Case.create({
    name: req.fields.name,
    owner: req.session.userid,
    sequence: req.fields.sequence,
  })
    .then(doc => {
      res.status(201).json({ status: 'success', case: doc })
    })
    .catch(next)
}

const createCaseErrorHandler = (error, req, res, next) => {
  if (error.name == 'ValidationError') {
    res.status(400).json({ status: 'error', message: error._message })
  }
  next(error)
}

module.exports = [createCaseHandler, createCaseErrorHandler]
