const express = require("express");
const morgan = require("morgan");
require("./consumer")

const app = express();
app.use(morgan('dev'))





app.get("/",function(req,res){
    res.send("SMS Notification Services!");
})



app.listen(8004,()=>console.log("SMS Notification Server runing on port 8004"))