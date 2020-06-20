const { getScreenshot } = require('../controllers').screenshots

const router = require('express').Router()

router.get('/:test_id/:ss_no', getScreenshot)

module.exports = router
