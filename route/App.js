import React from 'react';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from './components/Register'
import Login from './components/Login'
import MainPage from './components/MainPage'

const Stack = createNativeStackNavigator();

const fonts = () => Font.loadAsync({
  'Nunito-Medium': require('./styles/fonts/Nunito-Medium.ttf'),
  'Nunito-Light':require('./styles/fonts/Nunito-Light.ttf')
});

export default function App() {

  const [font, setFont] = useState(false);

  if (font) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MainPage" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn} />
    );
  }
  
};  
