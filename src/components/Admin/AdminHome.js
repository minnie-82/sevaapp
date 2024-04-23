import "react-native-gesture-handler";
import React, { useState } from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PieChart from "react-native-pie-chart";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Dashboard from "./Dashboard";
import Login from "../Login";
import Addadmin from "./Addadmin";
import Addseva from "./Addseva";
import Adddepartment from "./Adddepartment";
import SeeallUser from "./SeeallUsers";
import SevaNotification from "./SevaNotification";
import CustomDrawer from "./CustomDrawer";
import { FontAwesome } from "@expo/vector-icons";
import AdminProfile from "./AdminProfile";
import SevaReport from "./SevaReport";
import SaveInfoAdd from "./SevaInfoAdd";
import SelectUserScreen from "./SelectUserScreen";
import EditSevaDetails from "./EditSevaDetails";
import AdminSevaDetails from "./AdminSevaDetails";
import UserInfoAdd from "./UserInfoAdd";
import AdminInfoAdd from "./AdminInfoAdd";
import CircularProgress from 'react-native-circular-progress-indicator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AdminSevaDisplayCard from "./AdminSevaDisplayCard";
const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  const goToProfilePage = () => {
    navigation.navigate("AdminProfile");
  };

  const Stack = createNativeStackNavigator();

  const garphTypes = ["Active users", "Active seva", "Active Departments"];
  const [activeGarphTypes, setActivegarphTypes] = useState("Active users");
  const sevaStatus = ["Ongoing", "Upcoming"];
  const [activeSeva, setActiveSeva] = useState("Ongoing");
  const displaySevaStatus = () => {
    switch (activeSeva) {
      case "Ongoing":
        return <AdminSevaDisplayCard></AdminSevaDisplayCard>;
      case "Upcoming":
        return <AdminSevaDisplayCard></AdminSevaDisplayCard>;

      default:
        break;
    }
  };
  const displayGraphContent = () => {
    switch (activeGarphTypes) {
      case "Active users":
        return (
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#F8E9C8",
              padding: 20,
              borderRadius: 20,
              elevation: 1,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 20 }}>
              Total Users: <Text style={{ fontWeight: "bold" }}>100</Text>{" "}
            </Text>
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                gap: 40,
              }}
            >
              <CircularProgress
                value={60}
                radius={70}
                progressValueColor={"#003e6d"}
                activeStrokeColor={"#003e6d"}
                inActiveStrokeColor={"gray"}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={15}
                activeStrokeWidth={20}
              />

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="checkbox-blank-circle"
                  size={20}
                  color="#003e6d"
                />
                <Text>NA</Text>
              </View>
            </View>
          </View>
        );
      case "Active seva":
        return (
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#F8E9C8",
              padding: 20,
              borderRadius: 20,
              elevation: 1,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 20 }}>
              Total Seva: <Text style={{ fontWeight: "bold" }}>150</Text>{" "}
            </Text>
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                gap: 40,
              }}
            >
              <CircularProgress
                value={70}
                radius={70}
                progressValueColor={"#003e6d"}
                activeStrokeColor={"#003e6d"}
                inActiveStrokeColor={"gray"}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={15}
                activeStrokeWidth={20}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="checkbox-blank-circle"
                  size={20}
                  color="#003e6d"
                />
                <Text>NA</Text>
              </View>
            </View>
          </View>
        );
      case "Active Departments":
        return (
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#F8E9C8",
              padding: 20,
              borderRadius: 20,
              elevation: 1,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 20 }}>
              Total Departments: <Text style={{ fontWeight: "bold" }}>50</Text>{" "}
            </Text>
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                gap: 40,
              }}
            >
              <CircularProgress
                value={30}
                radius={70}
                progressValueColor={"#003e6d"}
                activeStrokeColor={"#003e6d"}
                inActiveStrokeColor={"gray"}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={15}
                activeStrokeWidth={20}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="checkbox-blank-circle"
                  size={20}
                  color="#003e6d"
                />
                <Text>NA</Text>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
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
              marginTop: 25,
              
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
                  width: 45,
                  height: 45,
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
          <View style={styles.tabsContainer}>
            <FlatList
              data={garphTypes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.tab(activeGarphTypes, item)}
                  onPress={() => {
                    setActivegarphTypes(item);
                  }}
                >
                  <Text style={styles.tabText(activeGarphTypes, item)}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              contentContainerStyle={{ columnGap: 12 }}
              horizontal
              style={{ marginLeft: 20 }}
            />
          </View>
          {displayGraphContent()}
          <View style={styles.tabsContainer}>
            <FlatList
              data={sevaStatus}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.tab(activeSeva, item)}
                  onPress={() => {
                    setActiveSeva(item);
                  }}
                >
                  <Text style={styles.tabText(activeSeva, item)}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              contentContainerStyle={{ columnGap: 12 }}
              horizontal
              style={{ marginLeft: 20 }}
            />
          </View>
          {displaySevaStatus()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
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
            <Text style={{ marginLeft: 15, fontSize: 15 }}>Admin</Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, paddingTop: 20 }}>
          <DrawerItemList {...props} style={{ backgroundColor: "red" }} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{ padding: 20, borderTopWidth: 0.5, borderTopColor: "#003e6d" }}
      >
        <TouchableOpacity onPress={() => {}}>
          <View style={{ flex: 0, flexDirection: "row", gap: 6 }}>
            <FontAwesome name="sign-out" size={22} color={"#003e6d"} />
            <Text style={{ color: "#003e6d" }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AdminHome = () => {
  return (
    <NavigationContainer>
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
      >
        <Drawer.Screen
          name="Dashboard"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="home" size={22} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Admin"
          component={Addadmin}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="user-plus" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Seva"
          component={Addseva}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="plus" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Department"
          component={Adddepartment}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="sitemap" size={22} color={color} />
            ),
          }}
        />
       
        <Drawer.Screen
          name="View Users"
          component={SeeallUser}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="users" size={22} color={color} />
            ),
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
          name="AdminProfile"
          component={AdminProfile}
          options={{
            headerShown: false,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="SaveInfoAdd"
          component={SaveInfoAdd}
          options={{
            headerShown: false,
            drawerLabel: () => null,
          }}
        />
         <Drawer.Screen
          name="UserInfoAdd"
          component={UserInfoAdd}
          options={{
            headerShown: false,
            drawerLabel: () => null,
          }}
        />
          <Drawer.Screen
          name="AdminInfoAdd"
          component={AdminInfoAdd}
          options={{
            headerShown: false,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="Addseva"
          component={Addseva}
          options={{
            headerShown: false,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="SelectUserScreen"
          component={SelectUserScreen}
          options={{
            headerShown: false,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="EditSevaDetails"
          component={EditSevaDetails}
          options={{
            headerShown: false,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="AdminSevaDetails"
          component={AdminSevaDetails}
          options={{
            headerShown: false,
            drawerLabel: () => null,
          }}
        />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 45,
    height: 45,
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
    color: "#444262",
    marginLeft: 20,
    marginTop: 5,
  },
  welcomeMessage: {
    fontSize: 24,
    color: "#312651",
    marginTop: 2,
    marginLeft: 20,
    fontWeight:"bold"
  },
  tabsContainer: {
    width: "100%",
    marginTop: 16,
  },
  tab: (activeGarphTypes, item) => ({
    paddingVertical: 12 / 2,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: activeGarphTypes === item ? "#444262" : "#C1C0C8",
  }),
  tabText: (activeGarphTypes, item) => ({
    color: activeGarphTypes === item ? "#444262" : "#C1C0C8",
  }),
});

export default AdminHome;
