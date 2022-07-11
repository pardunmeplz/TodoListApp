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
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
 
 function Edit(){
   return <View style = {{flex : 1}}>
       <Text style = {styles.title}>Create new task</Text>
       <Text style = {styles.text}>Task name</Text>
       <View style = {styles.details}>
           <Text style = {styles.textBlack}>Date</Text>
           <Text style = {styles.textBlack}>Description</Text>
           <Text style = {styles.textBlack}>Status</Text>
           <Pressable style= {styles.button}>
               <Text style = {styles.textButton} >Create</Text>
           </Pressable>
           </View>
   </View>
 };
 
 
 const styles = StyleSheet.create({
     title:{
         margin:20,
         marginLeft:50,
         fontSize:30,
         color:'white'
     },
     text:{
        margin:10,
        marginLeft:50,
        fontSize:20,
        color:'white'
    },
    textBlack:{
        margin:10,
        marginLeft:50,
        fontSize:20,
        color:'black'
    },
    textButton:{
        fontSize:20,
        color:'black'
    },
    button:{

        alignSelf:'center',
        borderWidth:3,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:25,
        paddingVertical:10
    },
     
   details:{
     flex:7.4,
     backgroundColor:'white',
     borderTopLeftRadius:70,
     borderTopRightRadius:70,
     marginTop:50,
     paddingVertical:50,
     justifyContent:'flex-end'
   }
 })
 
 export default Edit;
 