import { url } from "../../api";
import axios from "axios"
import { toast } from "react-toastify";

export const LOGIN="LOGIN";
export const LOGOUT="LOGOUT";



//SignUp
export const signup = (payload,navigate) => async (dispatch) => {
    await axios.post(`${url}/auth/signup`, payload).then((res)=>{
      // console.log("signup",res);
      if(res.data.message==="user already exist"){
         toast("user already exist")
    }else{
      navigate("/auth/login")
    }
  })
    //console.log(res.data);
};

//Login
export const login = (payload,navigate) => async (dispatch) => {
     await axios.post(`${url}/auth/login`, payload).then((res)=>{
      // console.log("res",res)
       if(res.data.message==="success"){
           dispatch({
             type:LOGIN,
             payload:res.data
          })
          navigate("/")
     }
     else if(res.data.message==="email password required"){
          alert("email password required")    
     }
    }
   ).catch((error)=>{
      alert("invalid credentials")
   })
};

export const logout = () =>  (dispatch) => {
  dispatch({
      type:LOGOUT
  })
};