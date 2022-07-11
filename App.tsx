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
import { Wrapper } from './src/Wrapper';
import Profile from './src/profile/Screen';
import Register from './src/register/Screen';
import { Provider, useDispatch } from 'react-redux';
import store from './src/redux/Store';
import { logIn, logOut } from './src/redux/Slices/UserSlice';

export type RootStackParams = {
  home:undefined;
  register:undefined;
  profile:undefined;
  edit:undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();



function App(): JSX.Element{

  StatusBar.setHidden(true, 'slide');
  return(
  <Provider store = {store}>
  <NavigationContainer>
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name ="home" component={Wrapper} options={{headerShown:false}}/>
      <Stack.Screen name ="register" component={Register} options={{headerShown:false}}/>
      <Stack.Screen name ="profile" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name ="edit" component={Edit} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
} 
export default App;
