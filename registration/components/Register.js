import {Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback,SafeAreaView, Alert, Image} from 'react-native'
import React from 'react'
import { gStyle } from '../styles/style';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



const Register = () => {
    
    const navigation = useNavigation()
    
    const handleRegister = () => {
      Alert.alert('you have successfully registered')
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={gStyle.logContainer}>
            <Text style={gStyle.title}>Registration</Text> 
            <Image 
              source={require("../assets/icons8-place-marker-50.png")} 
              style={[gStyle.title, {width: 45, height: 45}]}/>  
            <KeyboardAvoidingView            
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
                    <TextInput
                        placeholder='Enter password again'     
                        secureTextEntry={true}
                        style={gStyle.input}  
                    />
                </View>
                <View style={gStyle.buttonContainer}>
                    <TouchableOpacity
                        style={gStyle.logRegButton}
                        onPress={handleRegister}
                    >
                        <Text style={gStyle.boldText}>Register</Text>
                    </TouchableOpacity>   
                </View> 
            </KeyboardAvoidingView>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Register




