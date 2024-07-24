import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
  ActivityIndicator, // Import ActivityIndicator for the loader
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { useUser } from "../global";
import { updateUser } from "./user_api";

const EditProfileUser = () => {
  const navigation = useNavigation();
  const { userData, setUserData } = useUser();

  const goToUserProfile = () => {
    navigation.navigate("UserProfile");
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    keshatra: "",
    dob: "",
    occupation: "",
    email: "",
    phoneNumber: "",
  });

  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  useEffect(() => {
    if (userData && Object.keys(userData).length > 0) {
      setFormData({
        firstName: userData.first_name.trim() || "",
        lastName: userData.last_name.trim() || "",
        keshatra: userData.keshatra.trim() || "",
        dob: userData.dob.trim() || "",
        occupation: userData.occupation.trim() || "",
        email: userData.email.trim() || "",
        phoneNumber: userData.phone_no.trim() || "",
      });
    }
  }, []);

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    const { firstName, lastName, email, phoneNumber } = formData;
    if (firstName && lastName && email && phoneNumber) {
      const updateData = {
        fname: formData.firstName.trim(),
        lname: formData.lastName.trim(),
        address: userData.address || "",
        age: userData.age || "",
        keshatra: formData.keshatra,
        dob: formData.dob,
        is_student: userData.is_student || "",
        is_working: userData.is_working || "",
        occupation: formData.occupation,
        role: userData.role || "",
        email: formData.email,
        phone_no: formData.phoneNumber,
        password: userData.password || "",
      };

      setIsLoading(true); // Set loading state to true

      try {
        console.log(updateData);
        const updatedUser = await updateUser(userData.id, updateData);
        setUserData(updatedUser); // Update user data
        Alert.alert("Success", "Data updated successfully!", [
          { text: "OK", onPress: goToUserProfile },
        ]);
      } catch (error) {
        Alert.alert("Error", "Failed to update data. Please try again.");
      } finally {
        setIsLoading(false); // Reset loading state
      }
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
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
              <TouchableOpacity onPress={goToUserProfile}>
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

            {/* Form inputs */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={(text) => handleInputChange("firstName", text)}
                value={formData.firstName}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={(text) => handleInputChange("lastName", text)}
                value={formData.lastName}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Kshetra</Text>
              <TextInput
                style={styles.input}
                placeholder="Kshetra"
                onChangeText={(text) => handleInputChange("keshatra", text)}
                value={formData.keshatra}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>DOB</Text>
              <TextInput
                style={styles.input}
                placeholder="DOB"
                onChangeText={(text) => handleInputChange("dob", text)}
                value={formData.dob}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Occupation</Text>
              <TextInput
                style={styles.input}
                placeholder="Occupation"
                onChangeText={(text) => handleInputChange("occupation", text)}
                value={formData.occupation}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => handleInputChange("email", text)}
                value={formData.email}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                onChangeText={(text) => handleInputChange("phoneNumber", text)}
                value={formData.phoneNumber}
                keyboardType="phone-pad"
              />
            </View>

            {/* Submit button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" /> // Loader
              ) : (
                <Text style={styles.buttonText}>Save</Text> // Button text
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20, // Add padding at the bottom if needed
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },
  formGroup: {
    width: "80%",
    marginVertical: 4,
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    color: "black",
    backgroundColor: "white",
    elevation: 4,
  },
  label: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#003e6d",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 30, // Increased border radius for more curve
    marginTop: 20,
    elevation: 8,
    alignItems: "center", // Center the content
    justifyContent: "center",
    minWidth: 150, // Minimum width for the button
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default EditProfileUser;
