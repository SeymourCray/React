import {Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback,SafeAreaView, Alert, Image} from 'react-native'
import React from 'react'
import { gStyle } from '../styles/style';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
    const navigation = useNavigation()
    
    const handleRegister = () => {
      navigation.navigate('Register')
        
    }

    const handleLogin = () => {
       Alert.alert('you have successfully logged in')
    }


    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={gStyle.logContainer}>
            <Text style={gStyle.title}>Let's Start!</Text> 
            <Image 
              source={require("../assets/icons8-place-marker-50.png")} 
              style={[gStyle.title, {width: 45, height: 45}]}/>  
            <KeyboardAvoidingView
                // behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={gStyle.avoidingView} 
            >   
                <View style={gStyle.inputContainer}>
                    <TextInput
                        placeholder='Email'                          
                        style={gStyle.input}
                    />
                    <TextInput
                        placeholder='Password'                           
                        secureTextEntry={true}
                        style={gStyle.input}  
                    />
                </View>
                <View style={gStyle.buttonContainer}>
                    <TouchableOpacity
                        style={gStyle.logRegButton}
                        onPress={handleLogin}
                    >
                        <Text style={gStyle.boldText} >Login</Text>
                    </TouchableOpacity>
                   
                      <Text style={gStyle.boldText} onPress={handleRegister}>Register</Text>
                </View> 
            </KeyboardAvoidingView>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Login




