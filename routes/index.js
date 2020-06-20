const authRouter = require('./auth')
const appRouter = require('./apps')
const fileRouter = require('./files')
const caseRouter = require('./cases')
const suitesRouter = require('./suites')
const testsRouter = require('./tests')
const screenshotsRouter = require('./screenshots')

const router = require('express').Router()

router.options((req, res) => {
  res.sendStatus(200)
})

router.use('/auth', authRouter)
router.use('/apps', appRouter)
router.use('/files', fileRouter)
router.use('/cases', caseRouter)
router.use('/suites', suitesRouter)
router.use('/tests', testsRouter)
router.use('/screenshots', screenshotsRouter)

// dummy endpoint to check if API is online
router.get('/', (req, res) => {
  res.send('Live!')
})

router.use('/', (error, req, res, next) => {
  //catch-all error handler
  res.status(400).json({ status: 'error', message: error.message })
})

module.exports = router
