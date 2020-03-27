const authRouter = require('./auth')
const appRouter = require('./apps')

const router = require('express').Router()

router.options((req, res) => {
  res.sendStatus(200)
})
router.post('/test', (req, res, next) => {
  res.json()
})

router.use('/auth', authRouter)
router.use('/apps', appRouter)

// dummy endpoint to check if API is online
router.get('/', (req, res) => {
  res.send('Live!')
})

router.use('/', (error, req, res, next) => {
  //catch-all error handler
})

module.exports = router
