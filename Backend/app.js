const express=require('express');
const app=express();
const mongoose=require('mongoose');
const{mongoUrl}=require('./keys')
app.use(express.json())
app.use('/',(req,res)=>{
    res.send('Hello world')
})
mongoose.connect(mongoUrl);
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb...')
})
app.listen(8000||process.env.port,()=>{
    console.log('server is active....')
})