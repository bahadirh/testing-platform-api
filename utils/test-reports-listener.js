const { listenToQueue, urlFromEnv } = require('./rabbitmq')
const { Test } = require('../models')

module.exports = () =>
  listenToQueue(urlFromEnv, 'results', channel => async msg => {
    const { test_id, results } = JSON.parse(msg.content)

    const testInstance = await Test.findById(test_id)

    testInstance.status = 'Done'
    testInstance.result = results
    await testInstance.save()

    channel.ack(msg)
  })
