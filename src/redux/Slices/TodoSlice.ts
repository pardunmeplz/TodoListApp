import {createSlice} from '@reduxjs/toolkit'

export interface taskState {
    title: String,
    description:String,
    status:Boolean,
    index?:Number
}

const initialState: taskState[] = [
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
        state.sort((a,b)=>{return a.status && !b.status?1:0})
    },
    changeTask: (state, action)=>{
        state[action.payload.index]= action.payload.task
    },
    addTask: (state, action)=>{
        state.sort((a,b)=>{return a.status && !b.status?1:0})
        state.push({title:"New Task", description:"Description Here!", status:false})
        
    },
    clearTasks:(state, action)=>{
        state.forEach((task, index)=>{if(task.status){state.splice(index, 1)}})
    }

} })

export const {loadList, deleteTask, toggleTask, changeTask, addTask, clearTasks} = todoSlice.actions;
export default todoSlice.reducer