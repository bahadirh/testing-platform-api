const amqp = require('amqplib')

module.exports = (url, queueName, msg) => {
  return amqp
    .connect(url)
    .then(async conn => {
      const channel = await conn.createChannel()

      await channel.assertQueue(queueName, { durable: true })
      await channel.sendToQueue(queueName, msg, { persistent: true })

      await channel.close()
      return conn.close()
    })
    .catch(error => {
      console.error(error)
      throw error
    })
}
