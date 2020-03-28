const logoutHandler = (req, res, next) => {
  req.session = null
  res.sendStatus(200)
  next()
}

module.exports = logoutHandler
