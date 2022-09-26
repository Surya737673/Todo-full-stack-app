import { LOGIN, LOGOUT } from "../actions/authaction"


const init = {
    login:false,
    userId:null,
    token:null,
    name:null,
    // todos:[]
}

export const authreducer = (state = init, action) => {
    switch (action.type) {
        case LOGIN : {
            return {
              ...state,
              login:true,
              userId:action.payload.uid,
              token:action.payload.token,
              name:action.payload.name           
            }
          }
        case LOGOUT:{
            return{
                ...state,
                login:false,
                userId:null,
                token:null,
                name:null,
            }
        }
       default:return state
    }
}