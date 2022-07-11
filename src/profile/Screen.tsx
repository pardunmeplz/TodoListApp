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
import { useDispatch } from 'react-redux';
import ProfileBar from '../home/ProfileBar';
import { logOut } from '../redux/Slices/UserSlice';
import * as auth from '../firebase/auth'
 
 function Profile(){
 const dispatch = useDispatch();
 const navigation = useNavigation();
 return <View style={{flex:1, backgroundColor:'black'}}>
       <ProfileBar flex = {2}/>
       <View style = {styles.profileView}>
          <Pressable onPress={()=>{
            auth.signOut()
                .then( ()=>{
                      dispatch(logOut());
                      navigation.goBack()});
            }}>
            <Text style={styles.logOut}>Log out</Text>
          </Pressable>

       </View>
   </View>
 };
 
 
 const styles = StyleSheet.create({
   profileView:{
     flex:7.4,
     backgroundColor:'grey',
     borderTopLeftRadius:70,
     borderTopRightRadius:70,
     marginTop:50,
     alignItems:'center',
     justifyContent:'flex-end',
     padding:50
   },
   logOut:{
      color:'blue',
      fontSize:20
   }

 })
 
 export default Profile;
 