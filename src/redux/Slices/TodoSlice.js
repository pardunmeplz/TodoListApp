import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {title:"Task1", description:"This is an example task", status:false},
    {title:"Task2", description:"You can describe the task here", status:true}
]

export const todoSlice = createSlice({
name:'todo',
initialState,
reducers:{
    loadList: (state, action) =>{
        state = action.payload.state
    },
    deleteTask: (state, action) =>{
        state.splice(action.payload, 1)
    },
    toggleTask: (state, action) =>{
        state[action.payload].status = !state[action.payload].status
    },
    changeTask: (state, action)=>{
        state[action.payload.index]= action.payload.task
    },
    addTask: (state, action)=>{
        state.push(action.payload.task)
    }
} })

export const {loadList, deleteTask, toggleTask, changeTask, addTask} = todoSlice.actions;
export default todoSlice.reducer