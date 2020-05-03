const amqp = require('amqplib')
const { rabbitMQURL, rabbitMQVHost, rabbitMQUser, rabbitMQPass } = process.env

module.exports = (queueName, msg) => {
  return amqp
    .connect(
      `amqp://${rabbitMQUser}:${rabbitMQPass}@${rabbitMQURL}${rabbitMQVHost}`
    )
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
