/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
    TextInput,
   StyleSheet,
   Text,
   View,
   Pressable,
 } from 'react-native';
import { Formik} from 'formik';
import * as yup from 'yup'
import Snackbar from 'react-native-snackbar';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getData, logIn } from '../redux/Slices/UserSlice';
import { RootStackParams } from '../../App';
import * as auth from '../firebase/auth'
import * as store from '../firebase/store'
import { loadList } from '../redux/Slices/TodoSlice';


const logValidation = yup.object().shape({
    email: yup.string()
                .email("Invalid Email")
                .required('No Email Entered'),
    password: yup.string()
                    .required("No Password Entered")
                    .min(6, "Invalid Password")
                    .max(15, "Invalid Password")
                    .matches(
                        /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                        "Invalid Password"
                      )
})


 function Login(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
    const dispatch = useDispatch()
   return <View style={{flex :1, justifyContent:'center', backgroundColor:'black'}} >
       <Text style = {styles.title}>Log In</Text>
       <Formik
       validationSchema={logValidation}
     initialValues={{
                        email: '',
                        password:'',
                    }}
                    
     onSubmit={values => {
         console.log(values)
         auth.signIn(values.email,values.password).then(
            ()=>{
                if(auth.loggedIn())
                {
                    navigation.reset({
                        index:0,
                        routes:[{name:"dashboard"}]
                    })
                }
                store.getUserData(values.email).then(
                    ({user, todo})=>{

                            if(user.exists)
                            dispatch(getData({
                                firstName:user.data()!.firstName,
                                lastName:user.data()!.lastName,
                                age:user.data()!.age,
                                gender:user.data()!.gender
                            }))

                            if(todo.exists)
                            {
                                dispatch(loadList(JSON.parse(todo.data()!.Todo)))
                            }
                            

                            if(auth.loggedIn())
                            {
                                dispatch(logIn({}))
                            }

            })})}}>
     {
        ({ handleChange, handleBlur, handleSubmit, values , errors}) =>
        (
            <View style = {styles.details}>

                <Text style={styles.textBlack}>Email</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}/>
                <Text style={styles.textBlack}>Password</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                    value={values.password}/>                                                     
                
                <Pressable style={styles.button} onPress={
                    _=>{if(errors.email || errors.password){
                            Snackbar.show({text:errors.email+" , "+errors.password, duration:Snackbar.LENGTH_LONG})
                        }
                    handleSubmit()}}>
                    <Text style = {styles.textButton}>Submit</Text>
                </Pressable>
            </View>
     )}
   </Formik>
   <Pressable onPress={_=>navigation.navigate('register')}>
        <Text style = {styles.newAccount}>New Account? Register Here</Text>
   </Pressable>
    </View>
 };
 
 
 const styles = StyleSheet.create({
     title:{
         margin:20,
         fontSize:30,
         color:'white',
         alignSelf:'center'
     },
     newAccount:{
        margin:20,
        fontSize:15,
        color:'#a0ddfa',
        alignSelf:'center',
        textDecorationLine: 'underline'
    },
    textBlack:{
        margin:10,
        marginLeft:50,
        fontSize:20,
        color:'black'
    },
    textButton:{
        fontSize:20,
        color:'black'
    },
    button:{

        alignSelf:'center',
        borderWidth:3,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:25,
        paddingVertical:10,
    },
    input:{
        marginHorizontal:50,
        marginBottom:30,
        color:'black',
        borderBottomWidth:3,
        fontSize:20
        
    },
     
   details:{
     backgroundColor:'white',
     borderRadius:70,
     marginTop:80,
     paddingVertical:60,
     justifyContent:'flex-end',
   }
 })
 
 export default Login;
 