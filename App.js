/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar,} from 'react-native';
import Edit from './src/edit/Screen';
import Home from './src/home/Screen';
import Login from './src/Login/Screen';
import Profile from './src/profile/Screen';
import Register from './src/register/Screen';


const Stack = createNativeStackNavigator();

function App(){
  StatusBar.setHidden(true, 'slide');
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name ="login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name ="register" component={Register} options={{headerShown:false}}/>
      <Stack.Screen name ="profile" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name ="home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name ="edit" component={Edit} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
} 
export default App;
