const { validateJSON } = require('../utils')
const { signup, login, logout } = require('../controllers').auth

const router = require('express').Router()

// Sample validation
// router.post("/login", [
//   validateJson({
//     required: ["email", "password"],
//     properties: {
//       email: {type: "string", format: "email"},
//       password: {type: "string"}
//     }
//   }),
//   login
// ]);

router.post('/signup', signup.signupHandler, signup.signupErrorHandler) // TODO: add ajv
router.post('/login', login.loginHandler, login.loginErrorHandler) // TODO: add ajv
router.use('/logout', logout.logoutHandler)

module.exports = router
