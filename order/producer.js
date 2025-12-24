const kafka = require("./config")

const producer = kafka.producer();

async function orderReceived(event) {
  await producer.connect();
 let response =  await producer.send({
    topic: 'payment-topic',
    messages: [
      { key: event.userId, value: JSON.stringify(event) }
    ]
  });
  await producer.disconnect();
}

module.exports = orderReceived