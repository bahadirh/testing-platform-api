const minio = require('./minio')
const middlewares = require('./middleware')
const rabbitmq = require('./rabbitmq')

module.exports = {
  minio,
  ...middlewares,
  ...rabbitmq,
}
