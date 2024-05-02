import { View, Text ,Image,SafeAreaView,TouchableOpacity,LayoutAnimation,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
// import Myseva from './MySeva';
const SevaDetails = () => {
  const [on,setOn]=useState(false)  
  const offColor ="#C1C1C1"
  const onColor = "#92B0FF"
  const navigation=useNavigation();

  const goToHomePage = () => {
      navigation.navigate('My Seva');
  };

  return (
    <SafeAreaView>

    <View style={{marginTop:30,width:"100%",height:"100%",backgroundColor:"#F8E9C8",flex:0,flexDirection:"column",}}>
      <View style={{width:"100%",height:"18%",backgroundColor:"transparent",flex:0,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <View>
        <Image source={require("../../../assets/nilkanth-pic.jpeg")} 
                style={{height:100,width:100,borderRadius:100,marginLeft:20}}>
        </Image>
        </View>
        
        <View style={{backgroundColor:"transparent",height:"100%",padding:10,flex:0,alignItems:"flex-start",justifyContent:"flex-start"}}>
        <TouchableOpacity onPress={goToHomePage}>
        <View style={{width:45,height:45,backgroundColor:"transparent",flex:0,alignItems:"center",justifyContent:"center",borderRadius:100,backgroundColor:"transparent",borderColor:"#070606",borderWidth:0.7,transform: [{ rotateZ: '-90deg' }],marginRight:30,marginTop:10}}>
            <FontAwesome name='long-arrow-up' size={25} color={"#070606"} />
        </View>
        </TouchableOpacity>
        </View>
       
      </View>
   
      <View style={{widht:"100%",height:"45%",backgroundColor:"transparent" ,padding:20}}>
        <Text style={{fontSize:35,fontWeight:"bold"}}>Nilkanth Varni</Text>
        <View style={{flex:0,flexDirection:"row",gap:10,alignItems:"center",justifyContent:"start",marginTop:15}}>
        <FontAwesome name='calendar' size={20} color={"#808080"}/>
        <Text style={{color:"#808080",fontSize:16}}>25 Febuary, 2024</Text>
        </View>
        <Text style={{fontSize:18,marginTop:20}}>Seva details which is mentioned</Text>
        <Text style={{fontSize:18}}>Seva work what to be done</Text>
        <Text style={{fontSize:18}}>What to be updated</Text>
        <View style={{marginTop:20,backgroundColor:"transparent",height:150,flex:0,flexDirection:"column",alignItems:"flex-start",justifyContent:"space-evenly"}}>
          <Text style={{fontSize:18}}>Leader: Leader Name</Text>
          <Text style={{fontSize:18}}>Phone no.: Leader Contact details</Text>
          <Text style={{fontSize:18}}>Date: 28 Febuary,2024</Text>
          <Text style={{fontSize:18}}>Time: 3:00 pm - 5:00 pm</Text>
        </View>
      </View>

      <View style={{widht:"100%",height:"20%",backgroundColor:"transparent"}}>
        <View style={{width:"100%",height:"50%",backgroundColor:"transparent",flex:0,flexDirection:"row",alignItems:"center",justifyContent:"center",gap:40}}>
          <Text style={{fontSize:15}}>Will you come to seva ?</Text>
          <TouchableOpacity onPress={()=>{
            LayoutAnimation.easeInEaseOut()
            setOn(!on)
            }} style={{width:"30%",height:45,backgroundColor:on?onColor:offColor,borderRadius:40,padding:3}}>
            <View style={{width:"35%",height:"100%",flex:0,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:40,alignSelf:on?"flex-end":"flex-start"}}>
              <Text>{on?"Yes":"No"}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{widht:"100%",height:"50%",backgroundColor:"transparent",flex:0,alignItems:"center",justifyContent:"center"}}>
            <View style={{width:"80%",height:"75%",backgroundColor:"white",borderRadius:20,flex:0,alignItems:"flex-start",justifyContent:"center",padding:20}}>
              <Text style={{fontSize:18}}>Status: Upcoming</Text>
            </View>
        </View>
      </View>
      <View style={{widht:"100%",height:"10%",backgroundColor:"transparent",flex:0,alignItems:"center",justifyContent:"center"}}>
      <TouchableOpacity style={styles.signOutBtn}>
        <Text style={styles.signOutText}>Save</Text>
      </TouchableOpacity>
      </View>
    </View>
    
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  signOutBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#003e6d", // Orange color
  },
  signOutText: {
    color: "#ffffff",
    fontSize: 18,
  },
 

});
export default SevaDetails