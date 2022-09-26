const express=require("express");
const todoRouter=express.Router();
const todoModel = require("../models/todo")
// const {
//     gettodos,addtodo,updatetodo,deletetodo
// }=require("../controllers/todo")


todoRouter.get("/:id", async(req,res)=>{
    const {id}=req.params
    const todos = await  todoModel.find({userId:id}).sort({ date: -1 });
    // const filteredTodos = todos.filter(todo => todo.userId === id);
    res.send(todos);
})


todoRouter.post('/',async(req,res)=>{
    const {title,userId}=req.body;
        // console.log(userId);
        let todo =await new todoModel({userId:userId,title:title,iscompleted:false,});
        let data= await todo.save();
        return res.status(200).send({data:data,message:"todo created"});
    
})

// todoRouter.patch('/edit/:id',async(req,res)=>{
//     const {id}=req.params
    
// })

todoRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    console.log("id",id);
    try{
        await todoModel.deleteOne({_id:id})
        return res.status(201).send({message:"Todo deleted"})
    }catch(e){
         return res.status(500).send({message:"Not Deleted"})
    }
    
})

todoRouter.put("/update/:id",async(req,res)=>{
    const {id}=req.params;
    try{
        await todoModel.findByIdAndUpdate({_id:id},{
            $set: { iscompleted: true }
        }
        )
        return res.status(201).send({message:"Todo status changed"})
    }catch(e){
         return res.status(500).send({message:"Error while changing status"})
    }
    
})




module.exports=todoRouter;