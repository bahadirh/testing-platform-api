const helmet = require('helmet')
const cors = require('cors')
const session = require('cookie-session')
const formidable = require('express-formidable')

const { sessionSecret } = process.env

const app = require('express')()
const routes = require('./routes')

app.use(helmet()) // TODO: fine-tuning?
app.use(
  cors({
    credentials: true,
    origin: true,
  })
)
app.use(
  session({
    name: 'testingApp',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    secret: sessionSecret,
    sameSite: true,
  })
)
app.use(formidable({ multiples: true, keepExtensions: true }))

app.use('/', routes)

module.exports = app
