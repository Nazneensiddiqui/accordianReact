import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./todoSlice";
const Store=configureStore({
    reducer:{
        //Your Reducer
     MyTodo:MyReducer
    }
})

export default Store;
