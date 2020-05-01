const client = require('./client')

module.exports = async (bucket, fileName, dest) => {
  if (!(await client.bucketExists(bucket))) {
    await client.makeBucket(bucket)
  }

  return client.copyObject(bucket, fileName, dest)
}
