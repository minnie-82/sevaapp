import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const AdminProfile=()=>{
    const navigation = useNavigation();

    const goToHomePage = () => {
      // Navigate to the profile page here
      // You need to have a "Profile" screen defined in your navigation stack
      navigation.navigate("Dashboard");
    };
    const goToLoginPage = () => {
      navigation.navigate("Login");
    };
  
    return (
      <SafeAreaView>
        <View style={{ width: "100%", height: "100%", marginTop: 30 }}>
          <View
            style={{
              width: "100%",
              height: "8%",
              flex: 0,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={goToHomePage}>
              <View
                style={{
                  marginRight: 20,
                  width: 45,
                  height: 45,
                  backgroundColor: "transparent",
                  flex: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  backgroundColor: "transparent",
                  borderColor: "#000000",
                  borderWidth: 0.7,
                }}
              >
                <FontAwesome name="remove" size={25} color={"#000000"} />
              </View>
            </TouchableOpacity>
          </View>
  
          <View
            style={{
              width: "100%",
              height: "25%",
              flex: 0,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Image
              source={require("../../../assets/profile-pic.jpeg")}
              style={{ height: 130, width: 130, borderRadius: 100 }}
            ></Image>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 10 }}>
              Manthan Jadav
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "light", marginTop: 2 }}>
              +91 8657258965
            </Text>
          </View>
  
          <View
            style={{
              backgroundColor: "transparent",
              width: "100%",
              height: "40%",
              flex: 0,
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}
          >
            <TouchableOpacity
              style={{
                width: "30%",
                height: 40,
                backgroundColor: "#003e6d",
                flex: 0,
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                flexDirection: "row",
                borderRadius: 30,
              }}
            >
              <FontAwesome
                name="edit"
                size={15}
                color={"#ffffff"}
                style={{ paddingLeft: 0 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  flex: 0,
                  justifyContent: "space-evenly",
                }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
  
            <View>
              <View
                style={{
                  width: "70%",
                  height: 40,
                  flex: 0,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <FontAwesome
                    name="user"
                    size={20}
                    color={"#003e6d"}
                    style={{ paddingLeft: 0 }}
                  />
                  <Text>First Name</Text>
                </View>
                <View
                  style={{
                    width: "70%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <Text>Manthan</Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  height: 40,
                  flex: 0,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <FontAwesome
                    name="user"
                    size={20}
                    color={"#003e6d"}
                    style={{ paddingLeft: 0 }}
                  />
                  <Text>Last Name</Text>
                </View>
                <View
                  style={{
                    width: "70%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <Text>Jadav</Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  height: 40,
                  flex: 0,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <FontAwesome
                    name="map-pin"
                    size={20}
                    color={"#003e6d"}
                    style={{ paddingLeft: 0 }}
                  />
                  <Text>Kshetra</Text>
                </View>
                <View
                  style={{
                    width: "70%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <Text>Kshetra 5</Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  height: 40,
                  flex: 0,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <FontAwesome
                    name="calendar"
                    size={20}
                    color={"#003e6d"}
                    style={{ paddingLeft: 0 }}
                  />
                  <Text>Date Of Birth</Text>
                </View>
                <View
                  style={{
                    width: "70%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <Text>01-08-2002</Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  height: 40,
                  flex: 0,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <FontAwesome
                    name="suitcase"
                    size={20}
                    color={"#003e6d"}
                    style={{ paddingLeft: 0 }}
                  />
                  <Text>Occupation</Text>
                </View>
                <View
                  style={{
                    width: "70%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <Text>Service</Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  height: 40,
                  flex: 0,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <FontAwesome
                    name="envelope"
                    size={20}
                    color={"#003e6d"}
                    style={{ paddingLeft: 0 }}
                  />
                  <Text>Email</Text>
                </View>
                <View
                  style={{
                    width: "70%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <Text>Manthan@gmail.com</Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  height: 40,
                  flex: 0,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <FontAwesome
                    name="phone"
                    size={20}
                    color={"#003e6d"}
                    style={{ paddingLeft: 0 }}
                  />
                  <Text>Phone Number</Text>
                </View>
                <View
                  style={{
                    width: "70%",
                    height: "100%",
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <Text>+91 9078563412</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: "17%",
              flex: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={goToLoginPage} style={styles.signOutBtn}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    signOutBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#003e6d", // Orange color
    },
    signOutText: {
      color: "#ffffff",
      fontSize: 18,
    },
  });
  export default AdminProfile;
  