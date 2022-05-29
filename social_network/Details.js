import React from 'react';
import {Text,View,ImageBackground,Image,TouchableOpacity,ScrollView,Share} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"

export default class Detail extends React.Component{
 
    state ={
        collectionSelected:true
    }
    onTabPressed=()=>{
        this.setState({ collectionSelected:!this.state.collectionSelected})
    }

    render(){
        return(
          
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height:"100%",
                backgroundColor:"#b2b6c2"
            }}
          >
            <View style={{
                backgroundColor:"#b2b6c2",
                height:"100%",
            }}>
                <View style={{
                    paddingHorizontal:40,
                    backgroundColor:"#FFF",
                    height:"50%",
                    borderBottomLeftRadius:50,
                    borderBottomRightRadius:50
                }}>
                    <View style={{
                        flexDirection:"row",
                        width:"100%",
                        marginTop:40
                    }}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}
                            style={{
                                width:"50%",
                            }}
                        >

                            <Icon
                                name="chevron-left"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>

                        
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                    

                    <Image
                        source={require('./images/4.png')}
                        style={{
                            height:100,
                            width:100,
                            borderRadius:60,
                            alignSelf:"center",
                            marginVertical:20
                        }}
                    />
                    
                   
                        </View>
                    <Text style={{
                        fontSize:22,
                        fontFamily:"Bold",
                        color:"black",
                        alignSelf:"center"
                    }}>
                        Иннокентий
                    </Text>
                    <Text style={{
                        fontFamily:"Medium",
                        fontSize:16,
                        color:"#9ca1a2",
                        alignSelf:"center"
                    }}>
                        Москва, Россия
                    </Text>

                    
                    <View style={{
                        flexDirection:"row",
                        alignSelf:"center",
                        marginTop:20
                    }}>
                        <View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:15,
                                    color:"black",
                                    alignSelf:"center"
                                }}>5</Text>
                                <Text style={{
                                    fontFamily:"Medium",
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    фото
                                </Text>
                        </View>

                        <View style={{marginHorizontal:40}}>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:15,
                                    color:"black",
                                    alignSelf:"center"
                                }}>145</Text>
                                <Text style={{
                                    fontFamily:"Medium",
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    друзей
                                </Text>
                        </View>


                        <View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:15,
                                    color:"black",
                                    alignSelf:"center"
                                }}>183</Text>
                                <Text style={{
                                    fontFamily:"Medium",
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    подписчиков
                                </Text>
                        </View>
                    </View>
                </View>


                <View style={{
                    flexDirection:"row",
                    paddingHorizontal:40,
                    paddingTop:20
                }}>
                    <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor: this.state.collectionSelected ? "black":"white",
                            borderBottomWidth:4,
                            paddingVertical:6,
                        }}
                    >
                        <Text style={{
                            fontFamily:"Bold",
                            color:this.state.collectionSelected ? "black":"white"
                        }}>Лучшее</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor: this.state.collectionSelected ? "white":"black",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                    >
                        <Text style={{
                            fontFamily:"Bold",
                            color:this.state.collectionSelected ? "white":"black"
                        }}>Все фотографии</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flexDirection:"row"}}>
                    <View style={{
                        backgroundColor:"#343539",
                        height:260,
                        width:280,
                        marginHorizontal:40,
                        borderRadius:30,
                        marginTop:30
                    }}>
                        <ImageBackground
                            source={require('./images/6.jpeg')}
                            style={{
                                width:280,
                                height:180
                            }}
                            imageStyle={{
                                borderRadius:30
                            }}
                        >
                            <View style={{
                                width:"100%",
                                alignItems:"flex-end"
                            }}>
                                    <TouchableOpacity style={{
                                        width:40,
                                        alignItems:"center",
                                        justifyContent:"center",
                                        marginTop:25,
                                        borderRadius:10,
                                        padding:8,
                                        marginRight:20,
                                        backgroundColor:"#343539"
                                    }}>
                                            <Icon
                                                name="edit"
                                                size={20}
                                                color="white"
                                            />
                                    </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        
                        <View style={{
                            paddingVertical:20,
                            paddingHorizontal:30
                        }}>                      
                            <Text style={{
                                fontFamily:"Medium",
                                color:"#dedede",
                                fontSize:12
                            }}>
                                5 фото
                            </Text>
                        </View>
                    </View>
                        
                    
                    <View style={{
                        height:180,
                        backgroundColor:"#FFF",
                        width:20,
                        marginLeft:-20,
                        marginTop:70,
                        borderTopLeftRadius:20,
                        borderBottomLeftRadius:20
                    }}>
                    </View>

                </View>

               
            </View>
            </ScrollView>
        )
    }
}