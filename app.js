const express = require("express")

const dotenv = require("dotenv").config()

const app = express()

const path = require("path")

app.use(express.static("public"))

app.listen(process.env.PORT, function(){
    console.log("Servidor funcionando en el puerto " + process.env.PORT)
})

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "views/home.html"))
})

app.get("/index", function(req,res){
    res.sendFile(path.join(__dirname, "views/index.html"))
})

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname, "views/login.html"))
})

app.post("/index.html", function(req,res){
    res.sendFile(path.join(__dirname, "views/home.html"))
})

app.post("/login.html", function(req,res){
    res.sendFile(path.join(__dirname, "views/home.html"))
})

