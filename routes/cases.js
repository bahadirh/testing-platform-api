const { createCase, listCases } = require('../controllers').cases

const router = require('express').Router()

router.post('/new', createCase)
router.get('/list', listCases)

module.exports = router
