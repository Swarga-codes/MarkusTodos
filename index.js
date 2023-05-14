const express=require('express');
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const path=require('path')
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
app.use(express.static(path.join(__dirname,'./Frontend/build')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./Frontend/build/index.html'),
    function(err){
        res.status(500).json(err)
    })
})
app.listen(8000||process.env.port,()=>{
    console.log('server is active....')
})