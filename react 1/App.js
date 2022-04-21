import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

const Greeting = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
      <Text style={{color:'white'}}>Hello World!</Text>
    </View>
  );
}
export default Greeting;
