/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import ProfileBar from '../home/ProfileBar';
 
 function Profile(){
   return <View flex = {1}>
       <ProfileBar flex = {2}/>
       <View style = {styles.taskView}></View>
   </View>
 };
 
 
 const styles = StyleSheet.create({
   taskView:{
     flex:7.4,
     backgroundColor:'grey',
     borderTopLeftRadius:70,
     borderTopRightRadius:70,
     marginTop:50
   }
 })
 
 export default Profile;
 