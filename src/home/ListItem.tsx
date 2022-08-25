import React from "react"
import {View, Text, StyleSheet, Pressable} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/Slices/TodoSlice";
import type { taskState } from "../redux/Slices/TodoSlice";
import { selectTask } from "../redux/Slices/EditSlice";

function Item({title, status, index, description}:taskState)
{
    const dispatch = useDispatch();
    const nav = useNavigation();
    return (
        <Pressable onPress={()=>dispatch(toggleTask(index))}
                    onLongPress={()=>{
                        dispatch(selectTask({title,status,index, description}));
                        nav.navigate('edit');}}>
            <View style={styles.background}>
        {
        title==""?<Text style={styles.empty}>no title</Text>:
        <Text
            style={status?styles.complete:styles.pending}>
            {title}</Text>
        }
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

    empty:{
        color:'grey',
        fontSize:20,
        fontStyle:"italic"
    },

    pending:{
        color:'white',
        fontSize:20,
    }


})
 function renderItem({item}:{item:taskState})
 {
    return <Item title={item.title} status={item.status} index= {item.index!} description={item.description}/>
 }

 export default renderItem;