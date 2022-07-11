import React, { ReactNode } from "react"
import {StyleSheet, FlatList, View} from "react-native"
import { useSelector } from "react-redux";
import renderItem from "./ListItem";
import type { RootState } from "../redux/Store";


function TodoView({children}:{children?: ReactNode}){

    const Data =  useSelector((state:RootState) => state.todo.map((value, index)=>{return {...value, index}}))

    return(
    <View style ={ styles.background}>
        {children}
        <FlatList
        data={Data}
        renderItem={renderItem}
        style = {styles.list}
        ></FlatList>
    </View>);
}

const styles = StyleSheet.create({

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