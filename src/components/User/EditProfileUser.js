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

const EditProfileUser = () => {
  const navigation = useNavigation();
  const goToViewAdmins = () => {
    navigation.navigate("UserProfile");
  };

  const [formData, setFormData] = useState({
    firstName: "Manthan ",
    lastName: "Jadav",
    kshetra: "2B",
    dob: "1990-12-14",
    occupation: "Nothing",
    email: "man2than@gmail.com",
    phoneNumber: "+91 8657258965",
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
    const { firstName, lastName, email, phoneNumber } = formData;
    if (firstName && lastName && email && phoneNumber) {
      // Submit the form
      Alert.alert("Success", "Data submitted successfully!", [
        { text: "OK", onPress: goToViewAdmins },
      ]);
      setFormData({
        firstName: "Manthan ",
        lastName: "Jadav",
        kshetra: "K5",
        dob: "01-08-2002",
        occupation: "Service",
        email: "Manthan@gmail.com",
        phoneNumber: "",
      });
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
            <TouchableOpacity onPress={goToViewAdmins}>
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
            placeholder="Kshetra"
            onChangeText={(text) => handleInputChange("kshetra", text)}
            value={formData.kshetra}
          />
          <TextInput
            style={styles.input}
            placeholder="DOB"
            onChangeText={(text) => handleInputChange("dob", text)}
            value={formData.dob}
          />
          <TextInput
            style={styles.input}
            placeholder="Occupation"
            onChangeText={(text) => handleInputChange("occupation", text)}
            value={formData.occupation}
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

          {/* Submit button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save</Text>
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
    elevation: 4,
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
    elevation: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default EditProfileUser;
