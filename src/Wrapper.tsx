import Home from './home/Screen'
import Login from './Login/Screen'
import * as fStore from './firebase/store'
import * as auth from './firebase/auth'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/Store';
import { getData } from './redux/Slices/UserSlice'

export function Wrapper()
{
    const dispatch = useDispatch()
    let loggedIn = useSelector((state:RootState)=>state.user.loggedin)
    loggedIn = loggedIn
    if( loggedIn)
    {
        fStore.getUserData(auth.userMail()).then(
            (user)=>{
                if(user.exists)
                dispatch(getData({
                    firstName:user.data()!.firstName,
                    lastName:user.data()!.lastName,
                    age:user.data()!.age,
                    gender:user.data()!.gender
                }))
            }
        )
    return <Home/>
    }else{
    return <Login/>
    }
}