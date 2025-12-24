const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'micro-services',
  brokers: ['localhost:9092']
});

module.exports = kafka;