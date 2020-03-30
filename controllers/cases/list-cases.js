const { Case } = require('../../models')

const listCasesHandler = (req, res, next) => {
  Case.find({ owner: req.session.userid })
    .select('+name +sequence -owner')
    .lean()
    .then(docs => {
      res.json({ status: 'success', cases: docs })
    })
    .catch(next)
}

module.exports = [listCasesHandler]
