const requiredEnvVars = ['dbURL', 'dbUsername', 'dbPassword']

requiredEnvVars.forEach(envVar => {
  if (!(envVar in process.env)) {
    throw new Error(`Environment variable '${envVar}' is not declared.`)
  }
})

module.exports = {
  ...process.env,
  dbURL: process.env.dbURL,
  PORT: process.env['PORT'] || 3000,
}
