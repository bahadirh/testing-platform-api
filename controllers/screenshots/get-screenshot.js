const { Test } = require('../../models')
const { downloadFileStream } = require('../../utils').minio

const retrieveScreenshot = (req, res, next) => {
  if (req.params.ss_no <= 0) {
    next(new Error('Invalid screenshot number.'))
  } else {
    Test.findOne({ owner: req.session.userid, _id: req.params.test_id })
      .lean()
      .then(test => {
        if (req.params.ss_no > test.result.state.length) {
          throw new Error('Invalid screenshot number.')
        } else {
          return downloadFileStream(
            req.session.userid,
            `${req.params.test_id}/${req.params.ss_no}.png`
          )
        }
      })
      .then(file => {
        file.pipe(res)
      })
      .catch(next)
  }
}

module.exports = [retrieveScreenshot]
