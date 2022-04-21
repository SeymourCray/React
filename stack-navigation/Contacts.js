import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contacts() {

  const navigation = useNavigation()

  const listOfUsers =[
    {key:'Valera', number:'89123456534'},
    {key:'Oleg', number:'89123456590'},
    {key:'Vadim', number:'89123456554'},
    {key:'Nikita', number:'89123458834'},
    {key:'Anton', number:'89333456534'},
    {key:'Vitya', number:'89123444534'},
    ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex:1}}>
          <Button
            title='Back'
            color='#52b9f9'
            fontSize='20'
            onPress={()=>navigation.goBack()}
          />
        </View>
        <View style={{alignItems:'center', flex:1}}>
          <Text style={styles.title}>Contacts</Text>
        </View>
       <View style={{flex:1}}>
          <Button
            title='Settings'
            color='#52b9f9'
            fontSize='20'
            onPress={()=>navigation.navigate('Settings')}
          />
        </View>
      </View>
      <FlatList data={listOfUsers} renderItem={({ item }) => 
      (<View style={styles.person}>
        <Text style={styles.text}>{item.key}</Text>
        <Text style={styles.text}>{item.number}</Text>
      </View>)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    padding:10,
    justifyContent:'space-between',
    alignItems:'baseline',
    backgroundColor:'white',
    fontWeight:'bold',
    flexDirection:'row',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  title:{
    marginTop:50,
    fontWeight:'bold',
    fontSize:20,
  },
  container:{
    flex:1
  },
  text:{
    color:'black',
    fontSize:20,
    textAlign:'center'
  },
  person:{
    backgroundColor:'white',
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-around',
    padding:20
  }
});
