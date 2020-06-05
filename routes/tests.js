const tests = require('../controllers').tests

const router = require('express').Router()

router.post('/new', tests.newTest)
router.get('/list', tests.listTests)
router.get('/:id', tests.testDetails)

module.exports = router
