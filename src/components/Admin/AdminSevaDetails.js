import React, { useState } from "react";
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
import SeeallUsers from "./SeeallUsers";
import SearchAndFilter from "./SearchAndFilter";
const AdminSevaDetails = () => {
  const navigation = useNavigation();
  const goToHomePage = () => {
    navigation.navigate("Addseva");
  };
  const tabs = ["SevaDetails", "Leader", "SwayamSevak's"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const TabButton = ({ name, activeTab, onHandleSearchType }) => (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
  // Sample data for users
  const [leader, setLeader] = useState([
    { id: "1", name: "Manthan Jadhav", phoneNumber: "981-933-4535" },
    { id: "2", name: "Akshar Parmar", phoneNumber: "996-739-0340" },
    { id: "3", name: "Meet Vaghasiya", phoneNumber: "720-856-3542" },

    // Add more users as needed
  ]);
  const [sevak, setSevak] = useState([
    { id: "1", name: "Aarav Patel", phoneNumber: "981-933-4535" },
    { id: "2", name: "Krish Mehta", phoneNumber: "996-739-0340" },
    { id: "3", name: "Dev Patel", phoneNumber: "720-856-3542" },
    { id: "4", name: "Yash Shah", phoneNumber: "720-856-3542" },

    { id: "5", name: "Viraj Patel", phoneNumber: "720-856-3542" },

    { id: "6", name: "Rohan Desai", phoneNumber: "720-856-3542" },

    { id: "7", name: "Neel Joshi", phoneNumber: "720-856-3542" },

    // Add more users as needed
  ]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "SevaDetails":
        return (
          <View>
            <Text style={styles.title}>Nilkanth Mandapam.</Text>
            <View style={styles.pointsContainer}>
              <View style={styles.pointWrapper}>
                <View style={styles.pointDot} />
                <Text style={styles.pointText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
              </View>
              <View style={styles.pointWrapper}>
                <View style={styles.pointDot} />
                <Text style={styles.pointText}>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </Text>
              </View>
              <View style={styles.pointWrapper}>
                <View style={styles.pointDot} />
                <Text style={styles.pointText}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </Text>
              </View>
              <View style={styles.pointWrapper}>
                <View style={styles.pointDot} />
                <Text style={styles.pointText}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </Text>
              </View>
            </View>
          </View>
        );

      case "Leader":
        return leader.map((leader) => (
          <TouchableOpacity key={leader.id}>
            <View style={styles.userCard}>
              <Text style={styles.userName}>{leader.name} </Text>
              <TouchableOpacity>
                <FontAwesome name="phone" size={25} color={"#070606"} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ));

      case "SwayamSevak's":
        return sevak.map((sevak) => (
          <TouchableOpacity key={sevak.id}>
            <View style={styles.userCard}>
              <Text style={styles.userName}>{sevak.name} </Text>
              <TouchableOpacity>
                <FontAwesome name="phone" size={25} color={"#070606"} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ));
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8E9C8" }}>
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
            </View>
            <View style={styles.logoBox}>
              <Image
                source={require("../../../assets/nilkanth-pic.jpeg")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              ></Image>
            </View>
            <View style={{ padding: 16, paddingBottom: 100 }}>
              <View style={styles.sevaTitleBox}>
                <Text style={styles.sevaTitle}>Nilkanth Mandapam</Text>
              </View>
              <View style={styles.sevaInfoBox}>
                <Text style={styles.sevaInfo}>
                  <FontAwesome name="calendar" size={15} color={"#808080"} />
                  24 April 2024 and{" "}
                  
                </Text>
                <Text style={styles.sevaInfo}>
                 <FontAwesome name="clock-o" size={15} color={"#808080"} />
                     12.00PM
                </Text>
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
              {displayTabContent()}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "black",
    // fontFamily: FONT.bold,
  },
  pointsContainer: {
    marginVertical: 12,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 12 / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: "gray",
    marginTop: 6,
  },
  pointText: {
    fontSize: 14    ,
    color: "gray",
    // fontFamily: FONT.regular,
    marginLeft: 12,
  },
  //final one
  logoBox: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8E9C8",
    borderRadius: 20,
  },

  sevaTitleBox: {
    marginTop: 12,
  },
  sevaTitle: {
    fontSize: 20,
    color: "#312651",
    // fontFamily: "bold",
    textAlign: "center",
  },
  sevaInfoBox: {
    marginTop: 12 ,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    
    
    
  },
  sevaInfo: {
    fontSize: 16 ,
    color: "#312651",
    gap: 10,
   
  },
  tabContainer: {
    marginTop: 12,
    marginBottom: 12,
    height: 50,
    
  },
  btn: (name, activeTab) => ({
    paddingVertical: 16,
    paddingHorizontal: 23,
    backgroundColor: name === activeTab ? "#312651" : "#F3F4F8",
    borderRadius: 16,
    marginLeft: 2,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  }),
  btnText: (name, activeTab) => ({
    fontSize: 12,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
  }),
  userCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: "80%",
    marginLeft: 40,
    marginTop: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AdminSevaDetails;
