import {createSlice} from '@reduxjs/toolkit'

export interface taskState {
    title: string,
    description:string,
    status:Boolean,
    index?:Number
}

const initialState: taskState[] = []

export const todoSlice = createSlice({
name:'todo',
initialState,
reducers:{
    loadList: (state, action) =>{
        return action.payload
    },
    deleteTask: (state, action) =>{
        state.splice(action.payload, 1)
    },
    toggleTask: (state, action) =>{
        state[action.payload].status = !state[action.payload].status
    },
    changeTask: (state, action)=>{
        state.splice(action.payload.index,1,action.payload);
    },
    addTask: (state, action)=>{
        console.log(state)
        return [{title:"a", description:"", status:false},...state]
        
    },
    clearTasks:(state, action)=>{
        return state.filter((task)=>!task.status)
    }

} })

export const {loadList, deleteTask, toggleTask, changeTask, addTask, clearTasks} = todoSlice.actions;
export default todoSlice.reducer