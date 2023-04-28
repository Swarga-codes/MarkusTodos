const mongoose=require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const USERS=mongoose.model("USERS")
const TodoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"USERS"
    }
})
mongoose.model("TODOS",TodoSchema)