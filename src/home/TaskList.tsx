import React, { ReactNode } from "react"
import {StyleSheet, FlatList, View} from "react-native"
import { useSelector } from "react-redux";
import renderItem from "./ListItem";
import type { RootState } from "../redux/Store";
import { Text } from "react-native-paper";


function TodoView({children}:{children?: ReactNode}){

    const Data =  useSelector((state:RootState) => state.todo.map((value, index)=>{return {...value, index}}))

    return(
    <View style ={ styles.background}>
        
        {children}
        {Data.length==0?<Text style={styles.hint}>Hint: press + to add new tasks</Text>:null}
        
        <FlatList
        data={Data}
        renderItem={renderItem}
        style = {styles.list}
        ></FlatList>
    </View>);
}

const styles = StyleSheet.create({

    hint:{
        color:'grey',
        fontSize:20,
        alignSelf:'center',
        paddingTop:20
    },
    background:{
        padding:0,
        paddingLeft:0,
        paddingBottom:100,
        flex:0.95

    },

    list:{
        padding:60,
        marginTop:20
    }
})

export default TodoView;