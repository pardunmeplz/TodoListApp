import Home from './home/Screen'
import Login from './Login/Screen'
import * as auth from './firebase/auth'

import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from './redux/Store';

export function Wrapper()
{
    let loggedIn = useSelector((state:RootState)=>state.user.loggedin)
    loggedIn = auth.loggedIn() || loggedIn
    return loggedIn?<Home/>:<Login/>
}