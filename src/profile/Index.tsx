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
   StyleSheet,
   View,
   Text
 } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProfileBar from '../home/ProfileBar';
import * as auth from '../firebase/auth'
import { logOut } from '../redux/Slices/UserSlice';
import { RootState } from '../redux/Store';
 
 function Profile(){
 const user = useSelector((state:RootState)=>state.user);
 const navigation = useNavigation();
 return <View style={{flex:1, backgroundColor:'black'}}>
       <ProfileBar flex = {2}/>
       <View style = {styles.profileView}>
          
          <Text style={{...styles.textBlack, fontWeight:'bold', fontSize:25}}>User Details</Text>
          <Text style={styles.textBlack}>Name: {user.firstName} {user.lastName}</Text>
          <Text style={styles.textBlack}>Age: {user.age}</Text>
          <Text style={styles.textBlack}>Gender: {user.gender=='M'?'Male':user.gender=='F'?'Female':'Other'}</Text>
          <Text style={styles.textBlack}>Email: {auth.userMail()}</Text>
          
          
          
          
          <Pressable style={styles.logOutBox} onPress={()=>{
            auth.signOut()
            navigation.reset({
              index:0,
              routes:[{name:'login'}]
              }) 
            }}>
            <Text style={styles.logOut}>Log out</Text>
          </Pressable>

       </View>
   </View>
 };
 
 
 const styles = StyleSheet.create({
   profileView:{
     flex:7.4,
     backgroundColor:'white',
     borderTopLeftRadius:70,
     borderTopRightRadius:70,
     marginTop:50,
     padding:50,
     paddingTop:80
   },
   logOutBox:{
    alignItems:'center',
    position:'absolute',
    alignSelf:'center',
    bottom:50
    
   },
   logOut:{
      color:'blue',
      fontSize:20,
   },
   textBlack:{
    margin:5,
    marginLeft:50,
    marginBottom:20,
    fontSize:20,
    color:'black'
},

 })
 
 export default Profile;
 