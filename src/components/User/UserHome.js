import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity,ScrollView,ImageBackground } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Dimensions} from 'react-native';

import YourSeva from './YourSeva';
import { useNavigation } from '@react-navigation/native';
import SevaDetails from './SevaDetails';
import UserProfile from './UserProfile';
import Login from '../Login'
import SevaNotification from './SevaNotifications';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView contentContainerStyle={{backgroundColor:'#fff',marginTop:0}}>
        <ImageBackground source={require("../../../assets/drawer-bg.png")} style={{padding:20}}>
                <View style={{flexDirection:"row",alignItems:"center",}}>
                <Image source={require("../../../assets/istockphoto-1139459625-170667a.webp")} 
                style={{height:60,width:60,borderRadius:40}}>
                </Image>
                <Text style={{marginLeft:15,fontSize:15}}>Manthanbhai Jadav</Text>
                </View>
            </ImageBackground>
            <View style={{flex:1,paddingTop:20}}>
            <DrawerItemList {...props} style={{backgroundColor:"red"}}/>
            </View>
 
        </DrawerContentScrollView>
        <View style={{padding:20,borderTopWidth:0.5,borderTopColor:"#003e6d"}}>
            <TouchableOpacity onPress={()=>{}}>
                <View style={{flex:0,flexDirection:"row",gap:6}}>
                <FontAwesome name="sign-out" size={22} color={"#003e6d"}/>
                <Text style={{color:"#003e6d"}}>
                Logout
            </Text>
                </View>
            </TouchableOpacity>
           
        </View>
        </View>
  );
};

const UserHome = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{ width: 200}}
        screenOptions={{headerShown:false,drawerActiveBackgroundColor:"#003e6d",drawerActiveTintColor:"#fff",drawerInactiveBackgroundColor:"#fff",drawerInactiveTintColor:"#003e6d"}}
        
         >
        <Drawer.Screen name="Home" component={HomeScreen} options={
            {
              drawerIcon:({color})=>(<FontAwesome name='home' size={22} color={color}/>),
              headerShown:false
            }
          }/>
        <Drawer.Screen name="My Seva" component={SevaDetails} options={
            {
              drawerIcon:({color})=>(<FontAwesome name='gear' size={22} color={color}/>),
              headerShown:false
            }
          }/>
          <Drawer.Screen name="Seva Notification" component={SevaNotification}   options={
            {
              drawerIcon:({color})=>(<FontAwesome name='bell' size={22} color={color}/>),
              headerShown:false,
            }
          }/> 
          {/* change the component name in above notification */}
        <Drawer.Screen name="UserProfile" component={UserProfile}   options={
            {
              headerShown:false,
              drawerLabel:()=>null
            }
          }/>
          
          <Drawer.Screen name="Login" component={Login}   options={
            {
              headerShown:false,
              drawerLabel:()=>null
            }
          }/>
        

      </Drawer.Navigator>
    </NavigationContainer>
    
  );
};

const HomeScreen = ({ navigation }) => {
  
  const goToProfilePage = () => {
    
    navigation.navigate('UserProfile');
  };
  return (
    <SafeAreaView>
    <ScrollView
        keyboardShouldPersistTaps='handled'
      >
      <View>
        <View style={{ width: "100%", height: 80, flex: 0, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", flexDirection: "row", marginTop: 30 }}>
          <View style={{ flex: 0, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", marginLeft: 15, gap: 20 }}>
            <View style={{ width: 45, height: 45, backgroundColor: "transparent", flex: 0, alignItems: "center", justifyContent: "center", borderRadius: 100, backgroundColor: "transparent", borderColor: "#D3D3D3", borderWidth: 0.7 }}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                {/* Use the navigation.toggleDrawer() method to open/close the drawer */}
                <FontAwesome name='navicon' size={25} color={"#A9A9A9"} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ fontSize: 18, textAlign: 'left', fontWeight: "bold" }}>Jai Swaminarayan,{"\n"}Manthanbhai</Text>
            </View>
          </View>
          <TouchableOpacity onPress={goToProfilePage}>
            <View>
              <Image
                source={require("../../../assets/profile-pic.jpeg")} // Replace with your profile image URL
                style={styles.profileImage}
              />
              <View style={styles.notificationBadge}>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
          <YourSeva />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 15
  },
  notificationBadge: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: 0,
    right: 15,
    backgroundColor: 'red',
    borderRadius: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserHome;
