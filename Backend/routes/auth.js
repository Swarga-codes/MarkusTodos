const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const USERS=mongoose.model('USERS')
const cors=require('cors')
router.use(cors())
router.get('/about',(req,res)=>{
    res.send("Hello I am about")
})
router.post('/signup',(req,res)=>{
    const{email,userName,password}=req.body;
    if(!email || !userName || !password) return res.status(422).json({error:"One or more fields are missing"});
    
    USERS.findOne({$or:[{email:email},{userName:userName}]}).then((saved)=>{
        if(saved){
            return res.status(422).json({error:'User already exists'})
        }
        
    })
})
module.exports=router;