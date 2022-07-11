import { createSlice } from "@reduxjs/toolkit";

export interface userState{
    loggedin: Boolean
}

const initialState: userState={loggedin:true}

export const userSlice = createSlice({

    name:'user',
    initialState,
    reducers:{
        logIn:(state, payload)=>{
            state.loggedin=true
        },
        logOut:(state, payload)=>{
            state.loggedin=false
        }
    }
})

export const {logIn, logOut} = userSlice.actions
export default userSlice.reducer