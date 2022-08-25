/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as fstore from "../firebase/store"
import * as auth from "../firebase/auth"

 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import { Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { editDesc, editTitle } from '../redux/Slices/EditSlice';
import { changeTask } from '../redux/Slices/TodoSlice';
import { RootState } from '../redux/Store';
 
 function Edit(){
  const task = useSelector((state:RootState)=>state.edit)
  const todo = useSelector((state:RootState)=>state.todo)
  const email = auth.userMail();
  const dispatch = useDispatch();
  const navigation = useNavigation();

   return <View style = {{flex : 1, backgroundColor:'black'}}>
       <Text style = {styles.title}>Edit task</Text>
       <Text style = {styles.text}>{task.title}</Text>
       <View style = {styles.details}>
          <Text style = {styles.textBlack}>Title</Text>
          <TextInput 
          value ={task.title}
          onChangeText={(text)=>{dispatch(editTitle(text))}}
          placeholder={"Add title here!"}/>   
          
          <Text style = {styles.textBlack}>Description</Text>
          <TextInput 
          value ={task.description}
          onChangeText={(text)=>{dispatch(editDesc(text))}}
          placeholder={"Add description here!"}/>  
          
          <Pressable style= {styles.button} onPress={()=>{
            dispatch(changeTask(task))
            fstore.writeTasks(email,todo)
            navigation.goBack()
            }}>
               <Text style = {styles.textButton}>Change</Text>
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
 