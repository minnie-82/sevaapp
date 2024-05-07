import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import YourSeva from "./YourSeva";
import { useNavigation } from "@react-navigation/native";
import SevaDetails from "./SevaDetails";
import UserProfile from "./UserProfile";
import Login from "../Login";
import SevaNotification from "./SevaNotifications";
import Myseva from "./MySeva";
import AdminHome from "../Admin/AdminHome";
import SevaCard from "./SevaCard";
import UserSevaDetails from "./UserSevaDetails";
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: "#fff", marginTop: 0 }}
      >
        <ImageBackground
          source={require("../../../assets/drawer-bg.png")}
          style={{ padding: 20 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/istockphoto-1139459625-170667a.webp")}
              style={{ height: 60, width: 60, borderRadius: 40 }}
            ></Image>
            <Text style={{ marginLeft: 15, fontSize: 15 }}>
              Manthanbhai Jadav
            </Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, paddingTop: 20 }}>
          <DrawerItemList {...props} style={{ backgroundColor: "red" }} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{ padding: 20, borderTopWidth: 0.5, borderTopColor: "#003e6d" }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          }}
        >
          <View style={{ flex: 0, flexDirection: "row", gap: 6 }}>
            <FontAwesome name="sign-out" size={22} color={"#003e6d"} />
            <Text style={{ color: "#003e6d" }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const UserHome = () => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{ width: 200 }}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#003e6d",
        drawerActiveTintColor: "#fff",
        drawerInactiveBackgroundColor: "#fff",
        drawerInactiveTintColor: "#003e6d",
      }}
      initialRouteName="Login"
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="home" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="My Seva"
        component={Myseva}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="gear" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Seva Notification"
        component={SevaNotification}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="bell" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
      {/* change the component name in above notification */}
      <Drawer.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
          drawerLabel: () => null,
        }}
      />

      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          drawerLabel: () => null,
        }}
      />
      <Drawer.Screen
        name="UserSevaDetails"
        component={UserSevaDetails}
        options={{
          headerShown: false,
          drawerLabel: () => null,
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminHome}
        options={{
          headerShown: false,
          drawerLabel: () => null,
        }}
      />
    </Drawer.Navigator>
    //</NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const goToProfilePage = () => {
    navigation.navigate("UserProfile");
  };

  const tabs = ["Upcoming", "Ongoing", "Completed"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const TabButton = ({ name, activeTab, onHandleSearchType }) => (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );

  const displayActiveSevaTab = () => {
    switch (activeTab) {
      case "Upcoming":
        return <SevaCard></SevaCard>;
      case "Ongoing":
        return <SevaCard></SevaCard>;
      case "Completed":
        return <SevaCard></SevaCard>;
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <View
            style={{
              width: "100%",
              height: 80,
              flex: 0,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "white",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                marginLeft: 15,
                gap: 20,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "transparent",
                  flex: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  backgroundColor: "transparent",
                  borderColor: "#D3D3D3",
                  borderWidth: 0.7,
                }}
              >
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  {/* Use the navigation.toggleDrawer() method to open/close the drawer */}
                  <FontAwesome name="navicon" size={25} color={"#A9A9A9"} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={goToProfilePage}>
              <View>
                <Image
                  source={require("../../../assets/profile-pic.jpeg")} // Replace with your profile image URL
                  style={styles.profileImage}
                />
                <View style={styles.notificationBadge}></View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%" }}>
            <Text style={styles.userName}>Jai Swaminarayan</Text>
            <Text style={styles.welcomeMessage}>Manthanbhai</Text>
          </View>

          <View style={styles.tabContainer}>
            <FlatList
              data={tabs}
              renderItem={({ item }) => (
                <TabButton
                  name={item}
                  activeTab={activeTab}
                  onHandleSearchType={() => setActiveTab(item)}
                ></TabButton>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              contentContainerStyle={{ columnGap: 12 / 2 }}
            ></FlatList>
          </View>
          {displayActiveSevaTab()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 15,
  },
  notificationBadge: {
    width: 15,
    height: 15,
    position: "absolute",
    top: 0,
    right: 15,
    backgroundColor: "red",
    borderRadius: 100,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontSize: 20,
    color: "#003e6d",
    marginLeft: 20,
    marginTop: 2,
  },
  welcomeMessage: {
    fontSize: 24,
    color: "#003e6d",
    marginTop: 2,
    marginLeft: 20,
    fontWeight: "bold",
  },
  tabContainer: {
    marginTop: 12,
    marginBottom: 12,
    height: 50,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: (name, activeTab) => ({
    paddingVertical: 16,
    paddingHorizontal: 23,
    backgroundColor: name === activeTab ? "#003e6d" : "#F3F4F8",
    borderRadius: 16,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
  }),
  btnText: (name, activeTab) => ({
    fontSize: 12,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
  }),
});

export default UserHome;
