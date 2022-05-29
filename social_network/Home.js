import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from './Posts'

export default class Home extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
        return(
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height:"100%",
            }}
          >
              <View style={{
                  height:260,
                  width:"100%",
                  paddingHorizontal:35,
                  alignItems:"center",
                  justifyContent:'center'
              }}>                  
                <Text style={{
                    fontFamily:"Bold",
                    fontSize:25,
                    color:"black",
                    marginTop:30,
                }}> На связи </Text>

              </View>

              <View style={{
                  backgroundColor:"#b2b6c2",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  height:1000,
                  paddingHorizontal:35
              }}>
                  <View style={{
                      flexDirection:"row",
                      paddingTop:25
                  }}>
                   <TouchableOpacity
                         onPress={()=>this.props.navigation.navigate('Detail')}
                        style={{
                            borderBottomColor:this.state.profileSelected ? "pink":"#b2b6c2",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:3,
                            paddingRight:30
                        }}
                      >
                          <Image style = {{height:20, width:20}}
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/906/PNG/512/house_icon-icons.com_70104.png',
        }}
        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "black":"white",
                            borderBottomWidth:5,
                            paddingVertical:6
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "black":"white"
                          }}>Подписки</Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "white":"black",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "white":"black"
                          }}>Рекомендации</Text>
                      </TouchableOpacity>
                  </View>
                <View style={{flex:1}}>
                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Олег"
                        profile={require('./images/1.png')}
                        photo={require('./images/rocks1.jpeg')}
                      />
                  </View>
                  
                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Витя"
                        profile={require('./images/2.png')}
                        photo={require('./images/rocks2.jpeg')}
                      />

                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts 
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Настя"
                        profile={require('./images/3.png')}
                        photo={require('./images/rocks3.jpeg')}
                      />
                  </View>
                   
                  
                  
              </View>
</View>
          </ScrollView>
        )
    }
}