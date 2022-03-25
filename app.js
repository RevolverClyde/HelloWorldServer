///////////////////////////////// Requirements

const express = require("express");           
const res = require("express/lib/response");
const app = express();

///////////////////////////////////End Point Command
app.get("/", function(req, res) {
    res.send("Hello World")
});


//////////////////////////////Server Logic
app.listen(3000, function(){
    console.log("Server Started On Port 3000")
});