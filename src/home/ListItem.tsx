import React from "react"
import {View, Text, StyleSheet, Pressable} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/Slices/TodoSlice";
import type { taskState } from "../redux/Slices/TodoSlice";

function Item({title, status, index}:{title:String,status:Boolean,index:Number})
{
    const dispatch = useDispatch();
    const nav = useNavigation();
    return (
    
        <Pressable onPress={()=>dispatch(toggleTask(index))}
                    onLongPress={()=>{
                        nav.navigate({key:'edit'})}}>
            <View style={styles.background}>
        <Text
            style={status?styles.complete
                         :styles.pending}>
            
            {title}</Text>
        </View>
        </Pressable>
    
    );
}

const styles = StyleSheet.create({
    background:{
        paddingVertical:30,
        borderBottomWidth:1,
        borderColor:'white'
    },


    complete:{
        color:'orange',
        fontStyle:"italic",
        fontSize:20,
        textDecorationLine:'line-through'
    },

    pending:{
        color:'white',
        fontSize:20,
    }


})
 function renderItem({item}:{item:taskState})
 {
    return <Item title={item.title} status={item.status} index= {item.index!}/>
 }

 export default renderItem;