import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../api";

export const GET_TODOS="GETTODOS";
export const ADD_TODO="ADDTODO";
export const UPDATE_TODO="UPDATETODO";
export const DELETE_TODO="DELETETODO";
export const CLEAR_TODOS="CLEARTODO";
export const CHECK_TODO="CHECKTODO"


export const gettodos=(userId)=>async(dispatch)=>{
    let data=await axios.get(`${url}/${userId}`)
        // console.log("todo",data);
        dispatch({
            type:GET_TODOS,
            payload:data
      })
}


export const addtodo=(data)=>async(dispatch)=>{
    // console.log("payload",payload);
    try{
        axios.post(`${url}/`,data).then((res)=>{
            console.log("res",res.data.data)
            if(res.data.message=="todo created"){
                dispatch({
                type:ADD_TODO,
                payload:res.data.data
              })
              setTimeout(()=>{
                toast("todo status was changed")
              },100)
            }
              else{
                toast("error while changing todo status")
            }
        })
         }
           catch(error){
            console.log("error",error)
        }  
}


export const deletetodo=(payload)=>async(dispatch)=>{
    let id=payload;
    // console.log("id",id);
    try{
      axios.delete(`${url}/delete/${id}`).then((res)=>{
        // console.log("res",res)
          if(res.data.message=="Todo deleted"){
              dispatch({
              type:DELETE_TODO,
              id
            })
          }
            else{
              return {message:"error deleting todo"}
          }
      })
       }
         catch(error){
          console.log("error",error)
      }  
}

export const updateStatus=(payload)=>async(dispatch)=>{
  let id=payload
  console.log("ids",id)
  try{
    axios.put(`${url}/update/${id}`).then((res)=>{
      console.log("res",res)
        if(res.data.message=="Todo status changed"){
            dispatch({
            type:CHECK_TODO,
            // payload:res.data
          })
        }
          else{
            toast("error deleting todo") 
        }
    })
     }
       catch(error){
        toast("error deleting todo") 
    }  
}

export const updatetodo=(payload)=>async(dispatch)=>{
    
}