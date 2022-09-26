const express=require("express");
require("dotenv").config();
const cors=require("cors");
// const tokenChecker=require("./middlewares/tokenChecker")
const connectDb=require("./config/db");  // imoprting database

const app=express();

const todoRouter=require("./routes/todo");  // routes
const authRouter = require("./routes/auth");

connectDb();  // connecting database

// cors
app.use(cors({
    origin:true,
    credentials:true
}));

// initializing middlewares
app.use(express.json({extended:false}));
app.use(express());

// app.use(tokenChecker)

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

app.use("/",todoRouter);
app.use("/auth",authRouter)

const PORT=process.env.PORT || 8080;


app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})