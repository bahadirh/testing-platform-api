const { App, File_ } = require('../../models')

const createAppHandler = (req, res, next) => {
  // creates app instance
  App.create({
    // TODO: add json validation and replace that object with ...req.fields
    name: req.fields.name,
    version: req.fields.version,
    owner: req.session.userid,
  })
    .then(doc => {
      res.json({ status: 'success', app: doc })
    })
    .catch(next)
}

const createAppErrorHandler = (error, req, res, next) => {
  // TODO: handle errors
  res.status(400).json({ status: 'error', message: error.message })
}

module.exports = [createAppHandler, createAppErrorHandler]
