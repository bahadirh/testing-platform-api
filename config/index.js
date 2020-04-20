require('dotenv').config()
const requiredEnvVars = [
  'dbURL',
  'dbUsername',
  'dbPassword',
  'sessionSecret',
  'minioURL',
  'minioAccessKey',
  'minioSecretKey',
]
// verify required env vars are supplied
requiredEnvVars.forEach(envVar => {
  if (!(envVar in process.env)) {
    throw new Error(`Environment variable '${envVar}' is not declared.`)
  }
})
process.env['PORT'] = process.env['PORT'] || 3000
