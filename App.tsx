/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {StatusBar,} from 'react-native';
import Profile from './src/profile/Index';
import Register from './src/register/Index';
import { Provider} from 'react-redux';
import store from './src/redux/Store';
import Home from './src/home/Index';
import Login from './src/Login/Index';
import Edit from './src/edit/Index';
import * as auth from './src/firebase/auth'
import * as fstore from './src/firebase/store'
import { getData } from './src/redux/Slices/UserSlice';
import { loadList } from './src/redux/Slices/TodoSlice';

export type RootStackParams = {
  dashboard:undefined;
  register:undefined;
  profile:undefined;
  edit:undefined;
  login:undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();

function App(): JSX.Element{
  StatusBar.setHidden(true, 'slide');
  const initial = auth.loggedIn()?"dashboard":"login";
  useEffect(()=>{
    if(initial=="dashboard")
    {
      fstore.getUserData(auth.userMail()).then(
        ({user, todo})=>{

                if(user.exists)
                store.dispatch(getData({
                    firstName:user.data()!.firstName,
                    lastName:user.data()!.lastName,
                    age:user.data()!.age,
                    gender:user.data()!.gender
                }))

                if(todo.exists)
                {
                    store.dispatch(loadList(JSON.parse(todo.data()!.Todo)))
                }

    })}})

  return(
  <Provider store = {store}>
  <NavigationContainer>
    <Stack.Navigator initialRouteName={initial}>
      <Stack.Screen name ="dashboard" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name = "login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name ="register" component={Register} options={{headerShown:false}}/>
      <Stack.Screen name ="profile" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name ="edit" component={Edit} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
} 
export default App;
