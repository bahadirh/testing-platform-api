const suites = require('../controllers').suites

const router = require('express').Router()

router.post('/', suites.newSuite)

module.exports = router
