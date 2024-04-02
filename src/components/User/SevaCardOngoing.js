import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import SevaDetails from './SevaDetails';
const SevaCard = () => {
    const navigation = useNavigation();

    const goToDetails = () => {
        navigation.navigate('SevaDetails');
    };
  return (

    <View style={{width:"90%",height:400,backgroundColor:"#F8E9C8",borderRadius:30,marginTop:10,marginBottom:20,flex:0,alignItems:"center",justifyContent:"statrt",flexDiretion:"column",padding:10}}>
      <View style={{width:"100%",height:"30%",flex:0,flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:10}}>
      <Image source={require("../../../assets/nilkanth-pic.jpeg")} 
                style={{height:100,width:100,borderRadius:100,marginRight:20}}>
        </Image>
        <TouchableOpacity onPress={goToDetails}>
        <View style={{width:45,height:45,backgroundColor:"transparent",flex:0,alignItems:"center",justifyContent:"center",borderRadius:100,backgroundColor:"transparent",borderColor:"#070606",borderWidth:0.7,transform: [{ rotateZ: '45deg' }],marginRight:20}}>
            <FontAwesome name='long-arrow-up' size={25} color={"#070606"}/>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{width:"100%",height:"70%",padding:10,backgroundColor:"transparent",flex:0,flexDirection:"column",justifyContent:"space-evenly"}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>Nilkanth Varni</Text>
        <View style={{flex:0,flexDirection:"row",gap:10,alignItems:"center",justifyContent:"start"}}>
        <FontAwesome name='calendar' size={15} color={"#808080"}/>
        <Text style={{color:"#808080"}}>25 Febuary, 2024</Text>
        </View>
        <Text>
        Seva details which is mentioned.
        </Text>
        <Text>
        The seva work what to be done.
        </Text>
        <View style={{flex:0,alignItems:"start",justifyContent:"center",width:"100%",height:50,backgroundColor:"white",borderRadius:10}}>
            <Text style={{marginLeft:20,fontSize:15}}>Status : Ongoing</Text>
        </View>
      </View>
      
    </View>
   
    
  )
}

export default SevaCard;