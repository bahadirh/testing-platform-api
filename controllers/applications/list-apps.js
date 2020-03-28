const { App } = require('../../models')

const listAppsHandler = (req, res, next) => {
  App.find({ owner: req.session.userid })
    .select('+name +version -files -__v -owner')
    .lean()
    .then(docs => {
      res.json({ status: 'success', apps: docs })
    })
}

module.exports = [listAppsHandler]
