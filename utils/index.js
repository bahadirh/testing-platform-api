const minio = require('./minio')
const middlewares = require('./middleware')

module.exports = {
  minio,
  ...middlewares,
}
