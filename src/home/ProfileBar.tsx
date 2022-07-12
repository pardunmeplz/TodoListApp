import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
import {useSelector } from 'react-redux';
import { RootStackParams } from '../../App';
import { RootState } from '../redux/Store';

function ProfileBar({flex}:{flex:number}){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    const name = useSelector((state:RootState)=>state.user.firstName)
    return <View style = {{...styles.view, flex}}>
      <Pressable onPress={_=>{navigation.navigate('profile')}}>
      <View style = {styles.profile}>
        <Text style={{fontSize:20}}>Pd</Text>
        </View>
      </Pressable>
      <Text style={styles.name}>{name}</Text>
      </View>
  }

  const styles = StyleSheet.create({
    view:{
      backgroundColor:"grey",
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
      backgroundColor:'black',
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