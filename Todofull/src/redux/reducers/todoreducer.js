import {  ADD_TODO, CHECK_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from "../actions/todoaction";




export const todoReducer = (todos = [], {type,payload}) => {
  switch (type) {
    case GET_TODOS:{
        return payload.data
    }
    case ADD_TODO:{
      return [...todos,payload]
    }
    case CHECK_TODO:{
      return [...todos]
    }
    case DELETE_TODO:{
      return [...todos]
    }
    default:return todos;
  }
};


