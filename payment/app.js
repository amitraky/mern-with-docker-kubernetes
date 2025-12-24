const express = require("express");
const morgan = require("morgan");
require("./consumer")
const app = express();
app.use(morgan('dev'))





app.get("/",function(req,res){


    res.send("Payment Services!");
})




app.listen(8003,()=>console.log("Payment Server runing on port 8003"))