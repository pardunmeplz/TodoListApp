import { createSlice } from "@reduxjs/toolkit";

export interface userState{
    loggedin: Boolean,
    name?:String
}
export interface userPayload{
    type?:String,
    name?:String
}

const initialState: userState={loggedin:false, name:'NONE'}

export const userSlice = createSlice({

    name:'user',
    initialState,
    reducers:{
        logIn:(state, action)=>{
            state.loggedin=true
        },
        logOut:(state, action)=>{
            state.loggedin=false
        },
        getName:(state, action)=>{
            state.name= action.payload
        }

    }
})

export const {logIn, logOut, getName} = userSlice.actions
export default userSlice.reducer