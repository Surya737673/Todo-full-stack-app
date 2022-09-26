import { combineReducers } from 'redux';
import { authreducer } from './authreducer';
import { todoReducer } from './todoreducer';


const rootReducer = combineReducers({ 
    auth: authreducer,
    todos:todoReducer
})

export default rootReducer;