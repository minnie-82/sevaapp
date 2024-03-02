import React from 'react';
import { Text, View,Image ,StyleSheet, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import YourSeva from './YourSeva';


const UserHome =()=>{
  
   return(
    <SafeAreaView>
        <View>
        <View  style={{width:"100%",height:80,flex:0,alignItems:"center",justifyContent:"space-between",backgroundColor:"white",flexDirection:"row",marginTop:30}}>
        <View style={{flex:0,flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",marginLeft:15,gap:20}}>
        <View style={{width:45,height:45,backgroundColor:"transparent",flex:0,alignItems:"center",justifyContent:"center",borderRadius:100,backgroundColor:"transparent",borderColor:"#D3D3D3",borderWidth:0.7}}>
            <FontAwesome name='navicon' size={25} color={"#A9A9A9"}/>
        </View>
        <View>
            <Text style={{fontSize:18,textAlign:'left',fontWeight:"bold"}}>Jai Swaminarayan,{"\n"}Manthanbhai</Text>
        </View>
        </View>
        <TouchableWithoutFeedback>
        <View>
        <Image
          source={require("../../../assets/profile-pic.jpeg")} // Replace with your profile image URL
          style={styles.profileImage}
        />
        
          <View style={styles.notificationBadge}>
          </View>
        </View>
        </TouchableWithoutFeedback>

       
    </View>
    <View style={{width:"100%",height:"100%",backgroundColor:"red"}}>
        <YourSeva/>
    </View>
    </View>
    </SafeAreaView>
   );
};
const styles = StyleSheet.create({
    profileImage: {
      width: 45,
      height: 45,
      borderRadius: 50,
      marginRight:15
    },
    notificationBadge: {
      width:15,
      height:15,
      position: 'absolute',
      top: 0,
      right:15,
      backgroundColor: 'red',
      borderRadius: 100,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  });



export default UserHome;