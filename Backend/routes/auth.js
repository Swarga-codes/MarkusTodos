const express=require('express');
const router=express.Router();
router.get('/about',(req,res)=>{
    res.send("Hello I am about")
})
module.exports=router;