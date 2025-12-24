const kafka = require("./config")

const consumer = kafka.consumer({ groupId: "notify-group1" });
const producer = kafka.producer();
recieveMessage()
async function recieveMessage() {
    await consumer.connect();
    await consumer.subscribe({ topic: 'notify-topic', fromBeginning: true }); // 'fromBeginning: true' starts consuming from the earliest message

   await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {

    let orderData = message.value.toString();
    console.log("notify order received ...",orderData);
    
    sendSms(orderData)
   
  }
})

}

function sendSms(orderData){
    console.log("Email send on mail address.....",orderData)
}