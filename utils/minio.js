const minio = require('minio')
const { minioURL, minioSecretKey, minioAccessKey } = require('../config')
// TODO: make those config keys read be read from env
const client = new minio.Client({
  endPoint: minioURL,
  useSSL: true,
  accessKey: minioAccessKey,
  secretKey: minioSecretKey,
})

module.exports = client
