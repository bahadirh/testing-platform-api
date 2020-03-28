const { listApps, createApp } = require('../controllers').apps

const router = require('express').Router()

router.post('/new', createApp) // TODO: add auth
router.get('/list', listApps) // TODO: add auth

module.exports = router
