const cases = require('../controllers').cases

const router = require('express').Router()

router.post('/new', cases.createCase)
router.post('/run', cases.runCase)
router.get('/list', cases.listCases)

module.exports = router
