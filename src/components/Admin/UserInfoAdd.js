import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { API_ENDPOINT } from "../global";

const UserInfoAdd = () => {
  const navigation = useNavigation();
  const goToViewUsers = () => {
    navigation.navigate("View Users");
  };


  const addUser = async () => {
    try {
      console.log("Adding User..");
      const response = await fetch(`${API_ENDPOINT}addUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: "Dahisar",
          age: "21",
          dob: "2000-10-14",
          email: formData.email,
          fname: formData.firstName,
          is_student: "No",
          is_working: "Yes",
          keshatra: formData.kshetra,
          lname: formData.lastName,
          occupation: "Software Developer",
          password: "i*_G_w#",
          phone_no: formData.phoneNumber,
          role: "User",
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add seva");
      }

      const responseData = await response.json();

      if (response.ok) {
        // User added successfully
        console.log(responseData.message);
        // You can handle the success response here
      } else if (response.status === 400) {
        // Failed to add user
        console.log(responseData.message);
        // You can handle the failure response here
      } else {
        // Handle other status codes if needed
        console.log("Unexpected error:", responseData.message);
      }
    } catch (error) {
      // Network error or other issues
      console.error("Error adding user:", error);
      // You can handle errors here
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    kshetra: "",
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    // You can perform any validation here before submitting the form
    // For simplicity, I'm just checking if all fields are filled
    const { firstName, lastName, email, phoneNumber, kshetra } = formData;
    if (firstName && lastName && email && phoneNumber && kshetra) {
      // Submit the form
      Alert.alert("Success", "Data submitted successfully!", [
        { text: "OK", onPress: goToViewUsers },
      ]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        kshetra: "",
      });
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8E9C8" }}>
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
            <TouchableOpacity onPress={goToViewUsers}>
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
                <FontAwesome name="long-arrow-up" size={25} color={"#070606"} />
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

          {/* Form inputs */}
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={(text) => handleInputChange("firstName", text)}
            value={formData.firstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={(text) => handleInputChange("lastName", text)}
            value={formData.lastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => handleInputChange("email", text)}
            value={formData.email}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={(text) => handleInputChange("phoneNumber", text)}
            value={formData.phoneNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Kshetra"
            onChangeText={(text) => handleInputChange("kshetra", text)}
            value={formData.kshetra}
          />

          {/* Submit button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText} onPress={addUser}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "80%",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    color: "black",
    backgroundColor: "white",
  },
  placeholder: {
    color: "rgba(0, 0, 0, 0.5)",
  },

  button: {
    backgroundColor: "#003e6d",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default UserInfoAdd;
