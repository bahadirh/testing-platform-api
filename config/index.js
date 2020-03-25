const requiredEnvVars = [
  'dbURL',
  'dbUsername',
  'dbPassword',
  'sessionSecret',
  'minioURL',
  'minioAccessKey',
  'minioSecretKey',
]

requiredEnvVars.forEach(envVar => {
  if (!(envVar in process.env)) {
    throw new Error(`Environment variable '${envVar}' is not declared.`)
  }
})

module.exports = {
  sessionSecret: process.env.sessionSecret,
  PORT: process.env['PORT'] || 3000,
  dbURL: process.env.dbURL,
  dbUsername: process.env.dbUsername,
  dbPassword: process.env.dbPassword,
  minioURL: process.env.minioURL,
  minioAccessKey: process.env.minioAccessKey,
  minioSecretKey: process.env.minioSecretKey,
}
