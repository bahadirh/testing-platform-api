const tests = require('../controllers').tests

const router = require('express').Router()

router.post('/new', tests.newTest)

module.exports = router
