const express=require('express');
const app=express();
const mongoose=require('mongoose');
const{mongoUrl}=require('./keys')
app.use(express.json())
app.use(require('./routes/auth'))
mongoose.connect(mongoUrl);
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb...')
})
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.listen(8000||process.env.port,()=>{
    console.log('server is active....')
})