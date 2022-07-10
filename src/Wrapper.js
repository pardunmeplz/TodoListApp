import Home from './home/Screen'
import Login from './Login/Screen'

import React from 'react'

let loggedIn = false;

export function Wrapper()
{
    return loggedIn?<Home/>:<Login/>
}