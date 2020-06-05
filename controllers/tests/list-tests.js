const { Test } = require('../../models')

const listTestsHandler = (req, res, next) => {
  Test.find({ owner: req.session.userid })
    .select('platformName testCase buildFile status createdAt')
    .populate({
      path: 'testCase',
      select: 'name _id',
      retainNullValues: true,
    })
    .populate({
      path: 'buildFile',
      select: 'name _id',
      retainNullValues: true,
    })
    .lean()
    .then(docs => {
      res.json({ status: 'success', tests: docs })
    })
    .then(next)
    .catch(next)
}

const listTestsErrorHandler = (error, req, res, next) => {
  res.status(400).json({ status: 'error', message: error.message })
  next(error)
}

module.exports = [listTestsHandler, listTestsErrorHandler]
