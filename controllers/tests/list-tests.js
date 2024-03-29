const { Test } = require('../../models')

const listTestsHandler = (req, res, next) => {
  Test.find({ owner: req.session.userid })
    .select('platformName testCase buildFile status createdAt result')
    .sort('-createdAt')
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
      res.json({
        status: 'success',
        tests: docs.map(doc => {
          doc.result = doc.result.state.length
          return doc
        }),
      })
    })
    .catch(next)
}

module.exports = [listTestsHandler]
