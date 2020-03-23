const mongoose = require('mongoose')
const { dbURL, dbUsername, dbPassword } = require('../config')

const user = require('./users')

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true)
mongoose.set('autoIndex', false)

mongoose.connect(dbURL, { auth: { user: dbUsername, password: dbPassword } })

module.exports = {
  ...user,
}
