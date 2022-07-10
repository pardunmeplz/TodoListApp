import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function ProfileBar(props){
    const navigation = useNavigation();
    return <View style = {styles.view} flex = {props.flex}>
      <Pressable onPress={_=>{navigation.navigate('profile')}}>
      <View style = {styles.profile}>
        <Text style={{fontSize:20}}>Pd</Text>
        </View>
      </Pressable>
      <Text style={styles.name}>Name </Text>
      </View>
  }

  const styles = StyleSheet.create({
    view:{
      backgroundColor:"white",
      borderBottomLeftRadius: 70,
      borderBottomRightRadius: 70,
      padding: 10,
      alignItems: 'center',
      flexDirection:'row'  
    },
    profile:{
      width:100,
      height:100,
      borderRadius:500,
      backgroundColor:'grey',
      margin:25,
      marginLeft:50,
      alignItems:'center',
      justifyContent:'center'
    },
    name:{
      color:'black',
     fontWeight:'bold',
     fontSize:30,
     margin:20   
    }
  })
 
  export default ProfileBar