const { File_, Test, Case } = require('../../models')
const { sendBufferToQueue } = require('../../utils')

const newTestHandler = (req, res, next) => {
  Test.create({
    owner: req.session.userid,
    testCase: req.fields.testCase,
    buildFile: req.fields.buildFile,
    platformVersion: req.fields.platformVersion,
  })
    .then(async ({ _doc }) => {
      const file = await File_.findById(req.fields.buildFile).lean()
      const testCase = await Case.findById(req.fields.testCase).lean()

      await sendBufferToQueue(
        _doc.platformVersion,
        Buffer.from(
          JSON.stringify({
            ..._doc,
            buildFile: file.name,
            testCase: testCase.sequence,
          })
        )
      )

      res.json({ status: 'success' })
    })
    .catch(next)
}

const newTestErrorHandler = (error, req, res, next) => {
  res.status(400).json({ status: 'error', message: error.message })
  next(error)
}

module.exports = [newTestHandler, newTestErrorHandler]
