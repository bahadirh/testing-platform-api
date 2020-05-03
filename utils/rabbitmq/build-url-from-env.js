require('../../config')
const { rabbitMQURL, rabbitMQVHost, rabbitMQUser, rabbitMQPass } = process.env

module.exports = `amqp://${rabbitMQUser}:${rabbitMQPass}@${rabbitMQURL}${rabbitMQVHost}`
