import React from "react"
import {StyleSheet, FlatList, View} from "react-native"
import { useSelector } from "react-redux";
import renderItem from "./ListItem";


function TodoView(props){

    const Data =  useSelector(state => state.todo.map((value, index)=>{return {...value, index}}))

    return(
    <View style ={ styles.background}>
        {props.children}
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