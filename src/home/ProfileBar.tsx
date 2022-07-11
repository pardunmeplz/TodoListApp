import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';

function ProfileBar({flex}:{flex:number}){
    const navigation = useNavigation();
    return <View style = {{...styles.view, flex}}>
      <Pressable onPress={_=>{navigation.navigate({key:'profile'})}}>
      <View style = {styles.profile}>
        <Text style={{fontSize:20}}>Pd</Text>
        </View>
      </Pressable>
      <Text style={styles.name}>Name </Text>
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