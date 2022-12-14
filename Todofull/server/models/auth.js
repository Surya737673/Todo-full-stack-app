const mongoose=require("mongoose");

const authSchema= new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    hash: { type: String, required: true, minlength: 3, maxlength: 1024 },
})

const AuthModel=mongoose.model("todouser",authSchema)

module.exports=AuthModel;