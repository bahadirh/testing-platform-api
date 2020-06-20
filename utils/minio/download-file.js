const client = require('./client')

module.exports = (bucket, object) => {
  return client.getObject(bucket, object)
}
