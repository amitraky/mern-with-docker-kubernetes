const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser")
const order = require("./producer")
const cors = require("cors")

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(morgan('dev'))
app.use(cors())

app.get("/",function(req,res){
    res.send("Order Services!");
})

//order create new
app.post("/order",function(req,res){

    try {
        let orderDetails = {
            userId:(req.body.userId).toString(),
            orderId:Math.round((Math.random()*1000)),
            name:req.body.name
        }
        order(orderDetails)
        res.send("Order Placed!");
    } catch (error) {
        console.log(error)
       res.status(500).send("Internal Error");  
    }
})





// create new port 
app.listen(8001,()=>console.log("Order Server runing on port 8001 "))