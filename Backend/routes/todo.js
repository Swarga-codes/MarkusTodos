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
        creator:req.user.id
    })
    todo.save().then(result=>
        {
            return res.status(200).json({message:'Todos added successfully'})
        })
        .catch(err=>console.log(err))
})


module.exports=router