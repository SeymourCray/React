import React, {useCallback} from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Dimensions,TouchableOpacity,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const supportedURL = "https://www.youtube.com/watch?v=-p0PA9Zt8zk&ab_channel=ChloeTing";

export default function App() {

  const [exercises, setExercises] = React.useState([
    {id:1, name:'warm up (12 mins)', image:require('./assets/1.jpeg')},
    {id:2, name:'aerobics (15 mins)', image:require('./assets/2.jpeg')},
    {id:3, name:'aerobics (20 mins)', image:require('./assets/3.jpeg')},
    {id:4, name:'aerobics (25 mins)', image:require('./assets/4.jpeg')},
    {id:5, name:'aerobics (25 mins)', image:require('./assets/5.jpeg')},
    
  ])

  const handlePress = async () => {
    await Linking.openURL(supportedURL);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paragraph}>
        <Text style={styles.title}>SET 1</Text>
      </View>
      <FlatList
        style={styles.albumList}
        data={exercises}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>
            (<TouchableOpacity style={styles.point} onPress={handlePress}>
              <Image 
                source={item.image}
                style={{width:100,height:100,alignSelf:'center', borderRadius:15}}
              />
              <Text style={styles.text}>{item.name}</Text>
              <Icon name='right' size={20} color="grey" />
            </TouchableOpacity>)
          
        }
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex:1
  },
  paragraph: {
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'black',
    textAlign:'center',
    padding:10
  },
  albumList:{
    flex:1,
    backgroundColor:'white'
  },
  title:{
    color:'white',
    fontSize:30
  },
  text:{
    color:'black',
    fontSize:20
  },
  point:{
    backgroundColor:'white',
    padding:20,
    height:Dimensions.get('window').height/6,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'


  }
});
