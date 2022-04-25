import React, { useRef, useState } from "react";
import AnimatedSplash from "react-native-animated-splash-screen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Screen from './components/Screen'
 

 
const App = () => {
  
  return (
    <SafeAreaProvider>
     <Screen></Screen>
    </SafeAreaProvider>
  );
}
 
 
export default App;