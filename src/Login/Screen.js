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


 function Login(navigation){
   return <View flex ={1} justifyContent={'center'} backgroundColor={'black'}>
       <Text style = {styles.title}>Log In</Text>
       <Formik
       validationSchema={logValidation}
     initialValues={{
                        email: '',
                        password:'',
                    }}
                    
     onSubmit={values => {
         console.log(values)
         navigation.navigation.navigate('home')
         }}>
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
                    value={values.password}/>                                                     
                
                <Pressable style={styles.button} onPress={
                    _=>{if(errors.email || errors.password){
                            Snackbar.show({text:errors.email+" , "+errors.password, duration:Snackbar.LENGTH_LONG}
                            )
                        }
                    handleSubmit()}}>
                    <Text style = {styles.textButton}>Submit</Text>
                </Pressable>
            </View>
     )}
   </Formik>
   <Pressable onPress={_=>navigation.navigation.navigate('register')}>
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
 