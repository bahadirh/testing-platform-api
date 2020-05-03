const amqp = require('amqplib')

/**
 *
 * @param {String} url URL of the queue instance.
 * @param {String} queue Queue name to listen to.
 * @param {function(channel)} handler Accepts channel as argument and returns another fn to handle received messages.
 * @param {function(error)} errHandler
 */
module.exports = (url, queue, handler, errHandler = console.error) => {
  return amqp
    .connect(url)
    .then(async conn => {
      const channel = await conn.createChannel()

      await channel.assertQueue(queue, { durable: true })

      channel.consume(queue, handler(channel))
    })
    .catch(errHandler)
}
