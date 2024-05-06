import React from "react";
import {View,Text,Image,ImageBackground} from "react-native"
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
const CustomDrawer = (props)=>{
    var navigation = useNavigation()
    return (
        <View style={{flex:1}}>
        <DrawerContentScrollView contentContainerStyle={{backgroundColor:'#fff',marginTop:0}}>
        <ImageBackground source={require("../../../assets/drawer-bg.png")} style={{padding:20}}>
                <View style={{flexDirection:"row",alignItems:"center",}}>
                <Image source={require("../../../assets/istockphoto-1139459625-170667a.webp")} 
                style={{height:60,width:60,borderRadius:40}}>
                </Image>
                <Text style={{marginLeft:15,fontSize:20}}>Admin</Text>
                </View>
            </ImageBackground>
            <View style={{flex:1,paddingTop:20}}>
            <DrawerItemList {...props}/>
            </View>
 
        </DrawerContentScrollView>
        <View style={{padding:20,borderTopWidth:0.5,borderTopColor:"#   "}}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Login')
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  });          
            }}>
                <View style={{flex:0,flexDirection:"row",gap:6}}>
                <FontAwesome name="sign-out" size={22} color={"#F8E9C8"}/>
                <Text style={{color:"#181414"}}>
                Logout
            </Text>
                </View>
            </TouchableOpacity>
           
        </View>
        </View>
    )
}

export default CustomDrawer