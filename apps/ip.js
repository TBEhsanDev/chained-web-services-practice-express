var express = require("express");
var app = express();
app.use(express.json());
app.post("/", ip);

function ip(req,res,next){
    ip=req.header('X-Real-IP')
    body=req.body
    body['ip']=ip
    res.send(JSON.stringify(body));
}
module.exports = app;