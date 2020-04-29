const mongoose = require('mongoose')
const { dbURL, dbUsername, dbPassword } = process.env

const user = require('./users')
const app = require('./applications')
const file = require('./files')
const suite = require('./suites')
const case_ = require('./cases')
const test = require('./tests')
mongoose
  .connect(dbURL, {
    auth: { user: dbUsername, password: dbPassword },
    autoIndex: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch(error => {
    console.error('Unable to connect.')
    console.error(error.message)
  })

module.exports = {
  ...user,
  ...app,
  ...file,
  ...suite,
  ...case_,
  ...test,
}
