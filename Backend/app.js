const express=require('express');
const app=express();
const mongoose=require('mongoose');
const{mongoUrl}=require('./keys')
const cors=require('cors')
app.use(express.json())
app.use(cors())
mongoose.connect(mongoUrl);
require('./models/users')
require('./models/todos')
app.use(require('./routes/auth'))
app.use(require('./routes/todo'))
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb...')
})
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.listen(8000||process.env.port,()=>{
    console.log('server is active....')
})