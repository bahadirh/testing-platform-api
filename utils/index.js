const minio = require('./minio')
const middlewares = require('./middleware')
const rabbitmq = require('./rabbitmq')
const testReportsListener = require('./test-reports-listener')

module.exports = {
  minio,
  testReportsListener,
  ...middlewares,
  ...rabbitmq,
}
