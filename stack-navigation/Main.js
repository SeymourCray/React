import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Main() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <Text style={styles.title}>Telegramma</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Contacts')}>
          <Text style={styles.text}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Settings')}>
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    fontWeight:'bold',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  title:{
    marginTop:50,
    fontWeight:'bold',
    fontSize:20,
  },
  button:{
    padding:20,
    borderRadius:15,
    backgroundColor:'white',
    width:200,
    marginTop:10,
    alignItems:'center'
  },
  container:{
    flex:1
  },
  buttonContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'#52b9f9',
    fontSize:20,
    textAlign:'center'

  }
  
});
