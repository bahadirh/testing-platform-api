const minio = require('./minio')
const middlewares = require('./middleware')
const sendBufferToQueue = require('./rabbitmq')

module.exports = {
  minio,
  ...middlewares,
  sendBufferToQueue,
}
