const tests = require('../controllers').tests

const router = require('express').Router()

router.get('/list', tests.listTests)
router.post('/new', tests.newTest)
router.get('/:id', tests.testDetails)

module.exports = router
