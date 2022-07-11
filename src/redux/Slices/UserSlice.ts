import { createSlice } from "@reduxjs/toolkit";

export interface userState{
    loggedin: Boolean,
    name?:String
}
export interface userPayload{
    type:String,
    name?:String
}

const initialState: userState={loggedin:true, name:'NONE'}

export const userSlice = createSlice({

    name:'user',
    initialState,
    reducers:{
        logIn:(state, payload:userPayload)=>{
            state.loggedin=true
        },
        logOut:(state, payload:userPayload)=>{
            state.loggedin=false
        },
        getName:(state, payload:userPayload)=>{
            state.name=payload.name
        }

    }
})

export const {logIn, logOut} = userSlice.actions
export default userSlice.reducer