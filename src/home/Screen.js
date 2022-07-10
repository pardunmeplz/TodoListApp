/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { useNavigation } from '@react-navigation/native';
import React from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import ProfileBar from './ProfileBar';
import TodoView from './TaskList';
 
 function Home()
 { 

   return <View flex = {1}      backgroundColor={'black'}>
     <ProfileBar flex = {2}/>
     <View style = {styles.taskView}>
     <TodoView/>
     </View>
    
   </View>
 };
 
 
 const styles = StyleSheet.create({
   taskView:{
     flex:7.4,

   }
 })
 
 export default Home;
 