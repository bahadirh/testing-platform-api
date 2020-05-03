require('./config')
const server = require('./server')
const { testReportsListener } = require('./utils')

server(() => {
  testReportsListener()
})
