const kafka = require("./config")
const paymentProceeded = require("./paymentModel");

const consumer = kafka.consumer({ groupId: "payment-group" });

recieveMessage()
async function recieveMessage() {
    await consumer.connect();
    await consumer.subscribe({ topic: 'payment-topic', fromBeginning: true }); // 'fromBeginning: true' starts consuming from the earliest message

   await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {

    let orderData = message.value.toString();
    console.log("Payment order received ...",orderData);
    let response = await paymentProceeded(orderData)
    console.log("Response: ",response)
    notify(response);
    
   
  }
})

}




async function notify(event) {
    const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    
    topic: 'notify-topic',
    messages: [
      { key: event.userId, value: JSON.stringify(event) }
    ]
  });
  await producer.disconnect();
}

