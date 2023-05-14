const express=require('express')
const router=express.Router()
const cors=require('cors')
const mongoose=require('mongoose')
const VerifyLogin = require('../middlewares/VerifyLogin')
const TODOS=mongoose.model('TODOS')
router.use(cors({
    origin:'https://markus-todos-x8dl.vercel.app/',
    methods:["POST","GET","PUT","DELETE"]
}))

router.post('/createTodo',VerifyLogin,(req,res)=>{
    const{title,description,status}=req.body
    if(!title || !description){
        return res.status(422).json({error:'One or more fields are missing'})
    }
    const todo=new TODOS({
        title,
        description,
        status,
        creator:req.user._id
    })
    todo.save().then(result=>
        {
            return res.status(200).json({message:'Todos added successfully'})
        })
        .catch(err=>console.log(err))
})

router.get('/mytodos',VerifyLogin,(req,res)=>{
TODOS.find({creator:req.user._id})
.then(result=>{
    res.status(200).json(result)
})
.catch(err=>console.log(err))
})
router.delete('/deletetodos/:todoId',VerifyLogin,(req,res)=>{
   TODOS.findByIdAndDelete({_id:req.params.todoId})
   .then(result=>{
    return res.status(200).json({message:'Todos deleted successfully'})
   })
   .catch(err=>console.log(err))
})
router.put('/updatestatus',VerifyLogin,(req,res)=>{
    const{status,idx}=req.body
    TODOS.findByIdAndUpdate(idx,{
        $set:{status:status}
    },{
        new:true
    })
    .then(result=>{
        return res.status(200).json({status,message:'Status updated successfully'})
    })
    .catch(err=>console.log(err))
})
//update the todo content
router.put('/updatetodo',VerifyLogin,(req,res)=>{
    const{title,description,idx}=req.body
    if(!title || !description){
        return res.status(422).json({error:'One or more fields cannot be empty'})
    }
    TODOS.findByIdAndUpdate(idx,{
        $set:{title:title,description:description}
    },{
        new:true
    })
    .then(result=> {return res.status(200).json({message:'Todos updated successfully'})})
    .catch(err=>console.log(err))
})
module.exports=router