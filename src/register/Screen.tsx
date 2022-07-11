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
   ScrollView
   
 } from 'react-native'
import { Formik} from 'formik'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';

const regValidation = yup.object().shape({
    firstName: yup.string()
                    .required('Required field')
                    .matches(/^[aA-zZ\s]+$/, "No special Characters")
                    .trim("No spaces")
                    .strict(true)
                    .max(15),
    lastName: yup.string()
                    .required('Required field')
                    .matches(/^[aA-zZ\s]+$/, "No special Characters")
                    .trim("No Spaces")
                    .strict(true)
                    .max(15),
    age: yup.number()
            .required("Required field"),
    email: yup.string()
                .email("Invalid Email")
                .required('Required field'),
    password: yup.string()
                    .required("Required field")
                    .min(6, "min length 6")
                    .max(15, "max length 15")
                    .matches(
                        /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                        "upper & lowercase, digit and special char required"
                      )
})

 function Register(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
   return <ScrollView style={{backgroundColor:"black"}}>
       <View>
       <Text style = {styles.title}>Register new user</Text>
       <Formik
       validationSchema={regValidation}
     initialValues={{
                        firstName:'',
                        lastName:'',
                        email: '',
                        password:'',
                        age:0
                    }}
     onSubmit={values => {
         console.log(values)
         navigation.goBack()}}>
     {
        ({ handleChange, handleBlur, handleSubmit, values, errors }) =>
        (
            
            <View style = {styles.details}>
                <Text style={styles.textBlack}>First Name <Text style={styles.textError}>{errors.firstName}</Text></Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}/>
                

                <Text style={styles.textBlack}>Last Name <Text style={styles.textError}>{errors.lastName}</Text></Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}/>
                <Text style={styles.textBlack}>Age <Text style={styles.textError}>{errors.age}</Text></Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={handleChange('age')}
                    onBlur={handleBlur('age')}
                    value={String(values.age)}
                    keyboardType={'numeric'}/>
                <Text style={styles.textBlack}>Email <Text style={styles.textError}>{errors.email}</Text></Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}/>
                <Text style={styles.textBlack}>Password <Text style={styles.textError}>{errors.password}</Text></Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    secureTextEntry={true}/>                                                     
                
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style = {styles.textButton}>Submit</Text>
                </Pressable>
            </View>
     )}
   </Formik>
    </View>
    </ScrollView>
 };
 
 
 const styles = StyleSheet.create({
     title:{
         margin:20,
         marginLeft:50,
         fontSize:30,
         color:'white'
     },
     text:{
        margin:10,
        marginLeft:50,
        fontSize:20,
        color:'white'
    },
    textBlack:{
        margin:5,
        marginLeft:50,
        fontSize:20,
        color:'black'
    },
    textError:{
        fontSize:13,
        color:'red',
        marginLeft:50
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
     borderTopLeftRadius:70,
     borderTopRightRadius:70,
     marginTop:80,
     paddingVertical:60,
     justifyContent:'flex-end',
   }
 })
 
 export default Register;
 