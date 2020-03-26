const { createApp } = require('../controllers').apps

const router = require('express').Router()

router.post('/new', createApp.createAppHandler, createApp.createAppErrorHandler)

module.exports = router
