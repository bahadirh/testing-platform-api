const { App } = require('../../models')

const listAppsHandler = (req, res, next) => {
  App.find({ owner: req.session.userid })
    .select('+name +version -owner -files -__v')
    .lean()
    .then(docs => {
      res.json({ status: 'success', apps: docs })
    })
}

module.exports = { listAppsHandler }
