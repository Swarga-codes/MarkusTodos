const express=require('express')
const router=express.Router()
const cors=require('cors')
const mongoose=require('mongoose')
const VerifyLogin = require('../middlewares/VerifyLogin')
const TODOS=mongoose.model('TODOS')
router.use(cors())

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
    TODOS.findByIdAndUpdate(req.body.idx,{
        $set:{status:status}
    },{
        new:true
    })
    .then(result=>{
        return res.status(200).json({message:'Status updated successfully'})
    })
    .catch(err=>console.log(err))
})
module.exports=router