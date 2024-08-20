//import express module
var express=require('express')
var app=express()
var port=3100;
app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get('/about',(req,res)=>{
    res.send('<h2>About page</h2>')
})
app.get('/users/:rocky',(req,res)=>{
    var userName=req.params.name;
    res.send(`Hello,${username}!`);
})
app.listen(port,()=>{
    console.log('server running')
})