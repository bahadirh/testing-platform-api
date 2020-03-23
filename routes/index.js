const authRouter = require('./auth')

const router = require('express').Router()

router.use('/auth', authRouter)

router.get('/', (req, res) => {
  res.send('Live!')
})
module.exports = router
