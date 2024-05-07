import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation  } from "@react-navigation/native";
import { Linking } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import EditDepartment from "./EditDepartment";

const ContactDiaryPage = ({ route }) => {
  const navigation = useNavigation();
  const pageName = route.params?.page

  const goToHomePage = () => {
    navigation.navigate("Dashboard");
  };
  const handleOpenModal = () => {
    navigation.navigate("UserInfoAdd");
  };
  const handleUserSelection = (user) => {
    if(route.params.handleLeader){
      route.params.handleLeader(user);
    }
    if(route.params.handleKaryakar){
      route.params.handleKaryakar(user)
    }
    navigation.navigate(pageName)

    // if(pageName==='EditDepartment'){
    //   navigation.navigate(EditDepartment,
    //     // 'department':route.params.department,
    //     // 'datecome':route.params.datecome,
    //     // 'timecome':route.params.timecome,
    //     // 'details':route.params.details,
    //     // 'instruction':route.params.instruction
    //   ); // Navigate back to the parent screen
    // }
    // else{
    // }

    // navigation.navigate("SaveInfoAdd"); // Navigate back to the parent screen
  };

  // Sample data for users
  const [users, setUsers] = useState([
    { id: "1", name: "Manthan Jadhav", phoneNumber: "981-933-4535" },
    { id: "2", name: "Akshar Parmar", phoneNumber: "996-739-0340" },
    { id: "3", name: "Meet Vaghasiya", phoneNumber: "720-856-3542" },
    // Add more users as needed
  ]);

  // Function to handle calling a user
  const handleCallUser = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;

    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneUrl);
        } else {
          console.log("Phone call not supported");
        }
      })
      .catch((error) => console.error("An error occurred", error));
  };

  // Function to delete a user
  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              marginTop: 30,
              width: "100%",
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                backgroundColor: "transparent",
                flex: 0,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity onPress={goToHomePage}>
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
                    borderColor: "#070606",
                    borderWidth: 0.7,
                    transform: [{ rotateZ: "-90deg" }],
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <FontAwesome
                    name="long-arrow-up"
                    size={25}
                    color={"#070606"}
                  />
                </View>
              </TouchableOpacity>

              <View
                style={{
                  backgroundColor: "transparent",
                  marginLeft: 40,
                  marginTop: 30,
                  marginBottom: 30,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Image
                  source={require("../../../assets/splashwithoutbg.png")}
                  style={{ height: 90, width: 150 }}
                />
              </View>
            </View>

            {/* Display users */}
            {users.map((user) => (
              <View key={user.id} style={styles.userCard}>
                <TouchableOpacity style={styles.logoContainer}>
                  <Image
                    source={require("../../../assets/profile-pic.jpeg")}
                    style={styles.logImage}
                  ></Image>
                </TouchableOpacity>
                <View style={styles.textContainer}>
                  <Text
                    style={styles.jobName}
                    onPress={() => handleUserSelection(user)}
                  >
                    {user.name}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => handleCallUser(user.phoneNumber)}
                  >
                    <FontAwesome name="phone" size={25} color={"blue"} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDeleteUser(user.id)}
                    style={{ marginLeft: 10 }}
                  >
                    <FontAwesome name="trash" size={25} color={"red"} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableWithoutFeedback onPress={handleOpenModal}>
        <Animated.View style={[styles.floatingButton, styles.menu]}>
          <AntDesign name="plus" size={24} color="#FFF"></AntDesign>
        </Animated.View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  userCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8E9C8",
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    width:"90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#F3F4F8",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  jobName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#312651",
  },
  jobType: {
    fontSize: 12 + 2,
    color: "#83829A",
    marginTop: 3,
    textTransform: "capitalize",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  floatingButton: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#003e6d",
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
    right: 20,
    bottom: 50,
  },
  menu: {
    backgroundColor: "#003e6d",
  },
});

export default ContactDiaryPage;
