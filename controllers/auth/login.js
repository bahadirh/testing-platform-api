const bcrypt = require('bcryptjs')
const { User } = require('../../models')

const loginHandler = (req, res, next) => {
  User.findOne({ email: req.fields.email })
    .lean()
    .then(instance => {
      if (
        instance &&
        bcrypt.compareSync(req.fields.password, instance.password)
      ) {
        req.session.userid = instance._id
        delete instance.password
        res.json({ status: 'success', user: instance })
      } else {
        next(Error('No email-password match.'))
      }
    })
    .then(next)
    .catch(next)
}

const loginErrorHandler = (error, req, res, next) => {
  res.status(400).json({ status: 'error', message: error.message })
  next(error)
}

module.exports = [loginHandler, loginErrorHandler]
