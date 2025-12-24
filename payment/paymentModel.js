function paymentProceeded(data){

  return new Promise((resolve,reject)=>{

      console.log("payment proceeeding with data:",JSON.stringify(data))
      setTimeout(()=>{
       console.log("payment Done");
       resolve({order:1,status:'success',message:"Payment success"})
   },5*1000)//five second payment will done/success

  })
    

}
module.exports = paymentProceeded;