import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import AllSevaCard from "./AllSevaCard";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the icon you want to use

import SearchAndFilter from "./SearchAndFilter";
const Addseva = () => {
  const navigation = useNavigation();
  const goToHomePage = () => {
    navigation.navigate("Dashboard");
  };
  const handleOpenModal = () => {
    navigation.navigate("SaveInfoAdd");
  };
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Simulate starting and stopping the live status
    const interval = setInterval(() => {
      setIsLive((prevState) => !prevState);
    }, 1000); // Toggle every second, change this interval as needed

    return () => clearInterval(interval);
  }, []);

  const sevaTabs = ["live", "completed"];
  const [activeSevaTab, setActiveSevaTab] = useState(sevaTabs[0]);

  const displaySevaTab = () => {
    switch (activeSevaTab) {
      case "live":
        return <AllSevaCard></AllSevaCard>;
      case "completed":
        return <AllSevaCard></AllSevaCard>;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              marginTop: 35,
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
                    width: 40,
                    height: 40,
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
                    size={20}
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
                {/* <Image
                  source={require("../../../assets/splashwithoutbg.png")}
                  style={{ height: 90, width: 150 }}
                /> */}
              </View>
            </View>
            {/* <SearchAndFilter></SearchAndFilter> */}
            <View style={{ width: "100%" }}>
              <Text style={styles.userName}>Seva</Text>
              <Text style={styles.welcomeMessage}>
                Total Seva:<Text style={{ fontWeight: "bold" }}> 150</Text>
              </Text>
            </View>
            <View style={styles.tabsContainer}>
              <FlatList
                data={sevaTabs}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.tab(activeSevaTab, item)}
                    onPress={() => {
                      setActiveSevaTab(item);
                    }}
                  >
                    <Text style={styles.tabText(activeSevaTab, item)}>
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
            {displaySevaTab()}
            <View
              style={{
                width: "100%",
                height: "100%",
                flex: 0,
                alignItems: "center",
                justifyContent: "start",
              }}
            ></View>
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
  userName: {
    fontSize: 24,
    color: "#003e6d",
    marginLeft: 20,
    marginTop: 5,
    fontWeight: "bold",
  },
  welcomeMessage: {
    fontSize: 20,
    color: "#003e6d",
    marginTop: 2,
    marginLeft: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputView: {
    backgroundColor: "#ECF0F1",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
  },

  loginBtn: {
    width: "25%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#003e6d", // blue color
  },
  loginText: {
    color: "#ffffff",
    fontSize: 18,
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
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#FFF",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInstruction: {
    height: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlignVertical: "top",
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: "#003e6d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row", // Align buttons horizontally
  },
  button: {
    backgroundColor: "#003e6d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },

  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 1,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    borderRadius: 10,
    fontSize: 16,
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
    borderColor: activeGarphTypes === item ? "#003e6d" : "#C1C0C8",
  }),
  tabText: (activeGarphTypes, item) => ({
    color: activeGarphTypes === item ? "#003e6d" : "#C1C0C8",
  }),

  // dot: {
  //   width: 10,
  //   height: 10,
  //   borderRadius: 5,
  //   backgroundColor: "#ccc",
  //   marginRight: 5,
  // },
  // liveDot: {
  //   backgroundColor: "red", // Change to your preferred color for the live indicator
  // },
});

export default Addseva;
