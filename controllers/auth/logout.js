const logoutHandler = (req, res, next) => {
  req.session = null
  next()
}

module.exports = { logoutHandler }
