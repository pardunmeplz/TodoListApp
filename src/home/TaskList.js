import React from "react"
import {StyleSheet, FlatList, View} from "react-native"
import renderItem from "./ListItem";


function TodoView(props){

    const Data =         [{title:"Task1", description:"This is an example task", status:false},
    {title:"Task2", description:"You can describe the task here", status:true}]

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