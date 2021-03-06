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
   Pressable,
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, clearTasks } from '../redux/Slices/TodoSlice';
import FloatButton from './FloatButton';
import ProfileBar from './ProfileBar';
import TodoView from './TaskList';
 
 function Home()
 { 
  const dispatch = useDispatch();

   return(
   <View style={{flex : 1,backgroundColor:'black'}}>
     <ProfileBar flex = {2}/>
     <View style = {styles.taskView}>
     <TodoView/>
     </View>
     <FloatButton onPress = {()=>{dispatch(addTask({}))}}/>
     <View>
     </View>
     <Pressable onPress ={()=> dispatch(clearTasks({}))}>
        <View  style={styles.button}>
            <Text style={{fontSize:18}}>Clear completed</Text>
        </View>
     </Pressable>
   </View>
   )
 };
 
 
 const styles = StyleSheet.create({
   taskView:{
     flex:7.4,
   },
   button:{
    backgroundColor:'grey',
    width:200,
    alignItems:'center',
    borderRadius:20,
    margin:20,
    padding:5
   }

 })
 
 export default Home;
 