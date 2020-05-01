const { Case } = require('../../models')
const { sendBufferToQueue } = require('../../utils')

const runCaseHandler = (req, res, next) => {
  Case.findOne(req.fields.case_id)
    .lean()
    .then(doc => {
      if (!doc) {
        throw new Error("There's no such test case.")
      } else {
        return doc
      }
    })
    .then(async doc => {
      await sendBufferToQueue('task_queue', Buffer.from(JSON.stringify(doc)))

      res.sendStatus(204)
    })
    .catch(next)
}

const runCaseErrorHandler = (error, req, res, next) => {
  res.status(500).json({ status: 'error', message: error.message })
  next(error)
}

module.exports = [runCaseHandler, runCaseErrorHandler]