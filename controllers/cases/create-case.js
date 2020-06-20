const { Case } = require('../../models')

const createCaseHandler = (req, res, next) => {
  Case.create({
    name: req.fields.name,
    owner: req.session.userid,
    sequence: req.fields.sequence,
  })
    .then(doc => {
      res.status(201).json({ status: 'success', case: doc })
    })
    .catch(next)
}

module.exports = [createCaseHandler]
