
// const todoModel=require("../models/todo");


// const gettodos=async()=>{
//   try {
//     const todos = await todoModel.find();
   
//     // const filteredTodos = todos.filter(todo => todo.uid === req._id);
//     // res.send(todos);
//     return {
//       message: "TodoItems received successfully",
//       status: "success",
//       data:todos,
//    };
//     } catch (error) {
//      return { message: "something went wrong", status: "error" };
//     }
// }

// const addtoo=async(req,res)=>{
//   const {title, uid } = req.body;
 
//   let todo = new todoModel({ 
//     title,uid
//   });

//   todo = await todoModel.save();
//   res.send(todo);
// }

// const edittodo=async({id,data})=>{
//   try {
//       await todoModel.findByIdAndUpdate(id, data);
//       return { message: "todo Updated", status:"success" }
//   } catch (error) {
//       return { message: "something went wrong", status: "error" }
//   }
// }

// const deleteTodo=async(id)=>{
//   try {
//       await  todoModel.deleteOne({_id:id})
//       return({ message: "Todo deleted succesfully", status:"success"});
//   } catch (error) {
//       return { message: "something went wrong", status: "error" }
//   }
// }
// module.exports={addtoo,gettodos}