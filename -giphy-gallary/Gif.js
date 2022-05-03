import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Platform,TouchableOpacity,SafeAreaView,Dimensions, FlatList } from 'react-native';
import { addMultipleGifs, deleteAllGifs, getSingleGif } from './GifManagement';



export const Gif=({item, index})=> {

  const [selectedUri, setUri] = React.useState([]);

  const handleSelect = async id => {
    try {
      setUri(await getSingleGif(id));
    } catch (e) {
      console.error("Couldn't load gif", e);
    }
  };

  return (
    
             <View>
               <Button title={`Gif ${index + 1}`} key={item} onPress={() => handleSelect(item)} />
              <Image style={{ height: 200 }} source={{ uri: selectedUri }} />
              </View>
              
        
  
  );
}
