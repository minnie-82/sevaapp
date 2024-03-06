import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import YourSeva from './YourSeva';
import { useNavigation } from '@react-navigation/native';
import SevaDetails from './SevaDetails';
import UserProfile from './UserProfile';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* You can customize the drawer content here */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const UserHome = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{ width: 200 }} // Customize the drawer width as needed
         >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Drawer.Screen name="My Seva" component={YourSeva} options={{ headerShown: false }}/>
        <Drawer.Screen name="Seva Details" component={SevaDetails} options={{ headerShown: false }}/>
        <Drawer.Screen name="UserProfile" component={UserProfile}  options={{ drawerLabel: () => null ,headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
};

const HomeScreen = ({ navigation }) => {
  
  const goToProfilePage = () => {
    // Navigate to the profile page here
    // You need to have a "Profile" screen defined in your navigation stack
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
