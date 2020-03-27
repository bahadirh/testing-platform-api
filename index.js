require('dotenv').config()
const helmet = require('helmet')
const cors = require('cors')
const session = require('cookie-session')
const formidable = require('express-formidable')

const { sessionSecret, PORT } = require('./config')

const app = require('express')()
const routes = require('./routes')

// app.use(helmet({permittedCrossDomainPolicies: true, })) // TODO: fine-tuning?
app.use(
  cors({
    credentials: true,
    origin: true,
    preflightContinue: true,
    optionsSuccessStatus: 200,
  })
)
app.use(
  session({
    name: 'testingApp',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    secret: sessionSecret,
  })
)
app.use(formidable({ multiples: true, keepExtensions: true }))

app.use('/', routes)

app.listen(PORT, () => {
  console.info(`Listening connections on port ${PORT}`)
})
