const mongoose=require("mongoose");

const TodoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    iscompleted:{
        type:Boolean,
        required:true
    },
    date: {
         type: Date,
         default: new Date() 
    },
    userId:{
        type:String,
    }
    
})

const todoModel=mongoose.model("todo",TodoSchema);

module.exports=todoModel;