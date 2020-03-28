const { listFiles, uploadFile } = require('../controllers').files

const router = require('express').Router()

// TODO: add auth control
router.post('/upload', uploadFile)
router.get('/list', listFiles)

module.exports = router
