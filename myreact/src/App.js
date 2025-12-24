import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [order,setOrder] = useState(false);
  const [name,setName] = useState("");
  const [deb,setDeb] = useState("");
  const orderRequest = (e)=>{

e.preventDefault();
   if(deb) clearTimeout(deb);
   let deb2 = setTimeout(()=>{
   
    fetch("http://localhost:8001/order",{
      headers:{
        "Content-Type":"application/json"
      },
    method:'POST',
    body:JSON.stringify({
      userId:Math.round(Math.random()*1000),
      name:"AMIT"+Math.round(Math.random()*10),
      time:new Date()
    })
   }).then((data)=>{
      console.log(data)
       setOrder("Order Placed success")
   }).catch(err=>{
setOrder(err.message)
    console.log("ERROR",err.message)
    setTimeout(()=>setOrder(false),5*1000)
   })
   },2000)
   setDeb(deb2)
  
  }
  return (
    <div className="App">
         {order?order:""}
         <form>
           <fieldset style={{width:350,margin:20}}>
           <label for="fname">Your name: </label>
           <input name='name' required onChange={(e)=>setName(e.target.value)}></input>
           <button type='submit' onClick={orderRequest}>Submit</button>
           </fieldset>
           
         </form>
    </div>
  );
}

export default App;
