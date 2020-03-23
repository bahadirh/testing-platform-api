const { User } = require('../../models')

const signupHandler = (req, res, next) => {
  User.create(req.fields)
    .then(_payload => {
      res.status(201).json({ status: 'success' })
    })
    .then(next)
    .catch(next)
}

const signupErrorHandler = (error, req, res, next) => {
  if (error.code == 11000) {
    res.status(400).json({
      status: 'error',
      message: 'Email address is already signed up.',
    })
  }
  next(error)
}

module.exports = {
  signupHandler,
  signupErrorHandler,
}
