import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useUser } from "../global";
import { API_ENDPOINT } from "../global"; // Add this line

const UserProfile = () => {
  const navigation = useNavigation();
  const { userId, userData, setUserData } = useUser();
  const [loading, setLoading] = useState(true);

  // const userId = userData.id; // Assuming userId is stored in userData

  const fetchUserData = (userId) => {
    const apiUrl = `${API_ENDPOINT}/getuser/${userId}`;

    fetch(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Failed to fetch user data");
      })
      .then((userData) => {
        console.log("User data:", userData);
        setUserData(userData);
        setLoading(false); // Hide loader once data is fetched
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        setLoading(false); // Hide loader if there's an error
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      fetchUserData(userId);
    }, [userId])
  );

  const goToHomePage = () => {
    navigation.navigate("Home");
  };

  const goToEditProfileUser = () => {
    navigation.navigate("EditProfileUser");
  };

  const goToLoginPage = () => {
    navigation.navigate("Login");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#003e6d" />
      </SafeAreaView>
    );
  }

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
            {userData.first_name ? userData.first_name : "-"}{" "}
            {userData.last_name ? userData.last_name : "-"}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "light", marginTop: 2 }}>
            +91 {userData.phone_no ? userData.phone_no : "-"}
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
              marginTop: 40,
              marginBottom: 30,
            }}
            onPress={goToEditProfileUser}
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
                <Text>{userData.first_name ? userData.first_name : "-"}</Text>
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
                <Text>{userData.last_name ? userData.last_name : "-"}</Text>
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
                <Text>{userData.keshatra ? userData.keshatra : "-"}</Text>
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
                <Text>{userData.dob ? userData.dob : "-"}</Text>
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
                <Text>{userData.occupation ? userData.occupation : "-"}</Text>
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
                <Text>{userData.email ? userData.email : "-"}</Text>
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
                <Text>+91 {userData.phone_no ? userData.phone_no : "-"}</Text>
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
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signOutBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#003e6d",
  },
  signOutText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default UserProfile;
