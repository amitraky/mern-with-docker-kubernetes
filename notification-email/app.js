const express = require("express");
const morgan = require("morgan");
require("./consumer")

const app = express();
app.use(morgan('dev'))





app.get("/",function(req,res){
    res.send("Email Notification Services!");
})



app.listen(8005,()=>console.log("Email Notification Server runing on port 8005"))