import {createSlice} from '@reduxjs/toolkit'

import type {taskState}  from "./TodoSlice"

const initialState: taskState= {title:"", description:"", status:false};

export const todoSlice = createSlice({
name:'todo',
initialState,
reducers:{
    selectTask: (state, action)=>action.payload,
    editTitle: (state, action)=>{
        return {...state, title:action.payload}
        },
    editDesc: (state, action)=>{
        return {...state, description:action.payload}
        }
    

} })

export const {selectTask, editTitle, editDesc} = todoSlice.actions;
export default todoSlice.reducer