import { createSlice } from "@reduxjs/toolkit";
const TodoSlice=createSlice({
    name:"MyTodo",
    initialState:{
        task:[]
    },
    reducers:{
        AddTask:(state, actions)=>{
            state.task.push(actions.payload)
        },
        DeletTask:(state, actions)=>{
            state.task=state.task.filter(key=>key.id!==actions.payload)
        },
        EditTask:(state, actions)=>{
            const Item=state.task.find(key=>key.id===actions.payload.id)
            if(Item) Item.work=actions.payload.work
        },
        Uncomplited:(state,actions)=>{
           const Item=state.task.find(key=>key.id===actions.payload)
           if(Item) Item.status=false
        },
        Complited:(state, actions)=>{
            const Item=state.task.find(key=>key.id===actions.payload)
            if(Item) Item.status=true
        }
    }
})
export const {AddTask,DeletTask,EditTask,Uncomplited,Complited}=TodoSlice.actions;
export default TodoSlice.reducer;