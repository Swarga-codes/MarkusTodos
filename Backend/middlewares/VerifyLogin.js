const {SecretKey}=require('../keys')
const mongoose=require('mongoose')
const USERS=mongoose.model('USERS')
const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    const{authorization}=req.headers
    if(!authorization){
        return res.status(401).json({error:'User not authorized'})
    }
const token=authorization.replace("Bearer ","")
jwt.verify(token,SecretKey,(err,payload)=>{
if(err){
    return res.status(401).json({error:'Couldnt authorize'})
}
const{_id}=payload
USERS.findById(_id).then(result=>{
req.user=result
next();
})
})
    }
