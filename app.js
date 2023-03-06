const http = require("http");
const express = require("express");
const misrutas = require("./router/index")
const path = require("path");
const bodyparser = require("body-parser");
const app = express();
app.set('view engine',"ejs")
app.use(express.static(__dirname + '/public'))
app.engine('html', require('ejs').renderFile);

app.use(bodyparser.urlencoded({extended:true}));
app.use(misrutas);

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/error.html')
})


const puerto=501;
//const ip='34.203.33.75';
    app.listen(puerto, ()=>{

        console.log("Iniciado puerto "+puerto);
    })
