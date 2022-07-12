import { createSlice } from "@reduxjs/toolkit";
import { loggedIn } from "../../firebase/auth";

export interface userState{
    loggedin: Boolean,
    firstName?:String,
    lastName?:String,
    age?:String,
    gender?:String
}

const initialState: userState={loggedin:loggedIn() , firstName:'', lastName:''}

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
        getData:(state, action)=>{
            state.firstName= action.payload.firstName
            state.lastName = action.payload.lastName
            state.age = action.payload.age
            state.gender=action.payload.gender
        }

    }
})

export const {logIn, logOut, getData} = userSlice.actions
export default userSlice.reducer