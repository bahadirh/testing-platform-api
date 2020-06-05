const { Suite } = require('../../models')

const listSuitesHandler = (req, res, next) => {
  Suite.find({ owner: req.session.userid })
    .select('name app')
    .populate({
      path: 'app',
      select: 'name _id',
      retainNullValues: true,
    })
    .lean()
    .then(docs => {
      res.json({ status: 'success', suites: docs })
    })

    .catch(next)
}

const listSuitesErrorHandler = (error, req, res, next) => {
  res.status(400).json({ status: 'error', message: error.message })
  next(error)
}

module.exports = [listSuitesHandler, listSuitesErrorHandler]
