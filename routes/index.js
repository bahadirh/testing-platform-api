const authRouter = require('./auth')
const appRouter = require('./apps')

const router = require('express').Router()


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
