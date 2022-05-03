import {Text, 
        KeyboardAvoidingView, 
        View, 
        TextInput, 
        TouchableOpacity, 
        Keyboard, 
        TouchableWithoutFeedback,
        SafeAreaView, 
        Alert, 
        Image
        } from 'react-native'
import React from 'react'
import { gStyle } from '../styles/style';

const MainPage = ({route}) => {

  const {username} = route.params
    

    return (
      <View style={{flex:1}}>
        <View style={{
          padding:20,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#092642',
        }}
        >
        <Text style={{color:'white', marginTop:40, fontSize:30}}>
          Main Page
        </Text>
        </View>
        <View style={{width:'100%', alignItems:'center'}}>
          <Text style={{
            marginTop:100,
            color:'black',
            fontSize:20
          }}
          >Вы вошли под именем: {username}
          </Text>
        </View>
      </View>
  )
}

export default MainPage




