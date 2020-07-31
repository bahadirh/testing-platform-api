require('./config')
const server = require('./server')
const { testReportsListener } = require('./utils')
const { PORT } = process.env

server.listen(PORT, () => {
  console.info(`Listening connections on port ${PORT}`)
  testReportsListener()
})
