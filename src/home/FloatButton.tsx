import React from 'react'
import {TouchableHighlight, StyleSheet, Text} from 'react-native'




function FloatButton({onPress}:{onPress:Function})
{
    return(<TouchableHighlight style={styles.button} onPress={onPress()}>
        <Text style={{fontSize:30}}>+</Text>
        </TouchableHighlight>)
}


const styles = StyleSheet.create({

    button:{
        width:60,
        height:60,
        borderRadius:40,
        position:"absolute",
        bottom:20,
        right: 20,
        backgroundColor:'grey',
        elevation:5,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FloatButton;