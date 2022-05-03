import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Platform,TouchableOpacity,SafeAreaView,Dimensions, FlatList } from 'react-native';
import { addMultipleGifs, deleteAllGifs, getSingleGif } from './GifManagement';
import {Gif} from './Gif'

const gifIds = ['YsTs5ltWtEhnq', 'cZ7rmKfFYOvYI', '11BCDu2iUc8Nvhryl7','l3q2K5jinAlChoCLS','l0MYEqEzwMWFCg8rm','JltOMwYmi0VrO'];

function AppMain() {

  
  
  React.useEffect(() => {
    (async () => {
      await addMultipleGifs(gifIds);
      }
    )();

    
    return () => {
      deleteAllGifs();
    };
  }, []);

 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paragraph}>
        <Text style={styles.title}>Gallery</Text>

      </View>
      <FlatList
        style={styles.albumList}
        data={gifIds}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index})=>
             <Gif item={item} index={index}/>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex:1,
    
  },
  paragraph: {
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'black',
    textAlign:'center',
    padding:10,
  },
  albumList:{
    flex:1,
    backgroundColor:'white'
  },
  title:{
    color:'white',
    fontSize:30
  }
});

function UnsupportedPlatform() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        FileSystem doesn&#39;t support web. Run this on Android or iOS
      </Text>
    </View>
  );
}

export default function App() {
  return Platform.OS === 'android' || Platform.OS === 'ios' ? <AppMain /> : <UnsupportedPlatform />;
}
