const client = require('./client')
const uploadFile = require('./upload-file')
const copyFile = require('./copy-file-to-bucket')
const downloadFileStream = require('./download-file')

module.exports = { client, uploadFile, copyFile, downloadFileStream }
