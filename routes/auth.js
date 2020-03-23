const { validateJSON } = require('../utils')
const { signup, login } = require('../controllers/auth')

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

router.use('/signup', signup.signupHandler, signup.signupErrorHandler)
router.use('/login', login.loginHandler, login.loginErrorHandler)

module.exports = router
