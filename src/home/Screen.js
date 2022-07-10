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
 
 function Home()
 { 

   return <View flex = {1}>
     <ProfileBar flex = {2}/>
     <View style = {styles.taskView}></View>
     <View style = {styles.bottomView}></View>
   </View>
 };
 
 
 const styles = StyleSheet.create({
   taskView:{
     flex:7.4
   },
   bottomView:{
     flex:0.6,
     backgroundColor:'grey'
   },
 })
 
 export default Home;
 