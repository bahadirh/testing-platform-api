const suites = require('../controllers').suites

const router = require('express').Router()

router.get('/list', suites.listSuites)
router.post('/new', suites.newSuite)
router.get('/:id', suites.suiteDetails)

module.exports = router
