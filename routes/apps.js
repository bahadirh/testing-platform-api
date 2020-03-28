const { createApp, listApps } = require('../controllers').apps

const router = require('express').Router()

router.post('/new', createApp.createAppHandler, createApp.createAppErrorHandler) // TODO: add auth
router.get('/list', listApps.listAppsHandler) // TODO: add auth

module.exports = router
