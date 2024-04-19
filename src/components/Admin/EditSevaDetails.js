import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Animated,
  Pressable,
  Platform,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SelectUserScreen from "./SelectUserScreen";
// import AddButton from "./AddButton";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";

const EditSevaDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { department, datecome, timecome, details, instruction } = route.params;

  // const route = useRoute();
  const [formData, setFormData] = useState({
    department: department,
    datecome: datecome,
    timecome: timecome,
    details: details,
    instruction: instruction,
  });
  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (user) => {
    setSelectedUser(user);
  };
  const data = [
    { label: "Nilkanth Mandapam", value: "1" },
    { label: "Cleanliness", value: "2" },
    { label: "Medical Department", value: "3" },
    { label: "Prasad Vitran", value: "4" },
    { label: "Sabha Vaivastha", value: "5" },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  //datetimepiker
  const [dateData, setDateData] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateData(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  //timepicker
  const [timeData, setTimeData] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showTimePicker, setTimeShowPicker] = useState(false);
  const toggleTimePicker = () => {
    setTimeShowPicker(!showTimePicker);
  };
  const onChangeTime = ({ type }, selectedTime) => {
    if (type == "set") {
      const currentTime = selectedTime;
      console.log(currentTime);
      setTime(currentTime);
      if (Platform.OS === "android") {
        toggleTimePicker();
        setTimeData(currentTime.toLocaleTimeString());
        console.log(setTimeData);
      }
    } else {
      toggleTimePicker();
    }
  };

  const handleCloseModal = () => {
    navigation.navigate("Addseva");
  };

  animation = new Animated.Value(0);
  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    this.open = !this.open;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container} onRequestClose={handleCloseModal}>
          <View
            style={{
              marginTop: 0,
              width: "100%",
              backgroundColor: "#F8E9C8",
              flex: 1,
              flexDirection: "column",
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
              <View
                style={{
                  backgroundColor: "transparent",
                  marginLeft: 100,
                  marginTop: 35,
                  marginBottom: 10,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Image
                  source={require("../../../assets/splashwithoutbg.png")}
                  style={{ height: 100, width: 150 }}
                />
              </View>
            </View>
            <View></View>
            <View style={styles.modalContent}>
              <View>
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? "Select item" : "..."}
                  searchPlaceholder="Search..."
                  value={formData.department}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChangeText={(text) => handleInputChange("date", text)}
                  renderLeftIcon={() => (
                    <AntDesign
                      style={styles.icon}
                      color={isFocus ? "blue" : "black"}
                      name="Safety"
                      size={20}
                    />
                  )}
                />
              </View>

              <View>
                {showPicker && (
                  <DateTimePicker
                    mode="date"
                    display="spinner"
                    value={date}
                    onChange={onChange}
                  ></DateTimePicker>
                )}
                {!showPicker && (
                  <Pressable
                    onPress={toggleDatePicker}
                    style={styles.pressableContainer}
                  >
                    <TextInput
                      style={styles.textInput}
                      placeholder="12 Aug 2024"
                      placeholderTextColor="#000000"
                      value={formData.date}
                      onChangeText={(text) => handleInputChange("date", text)}
                      editable={false}
                    />
                    <FontAwesome
                      name="calendar"
                      size={24}
                      color="black"
                      style={styles.calendarIcon}
                    />
                  </Pressable>
                )}
              </View>

              <View>
                {showTimePicker && (
                  <DateTimePicker
                    mode="time"
                    display="spinner"
                    value={date}
                    onChange={onChangeTime}
                  ></DateTimePicker>
                )}
                {!showTimePicker && (
                  <Pressable
                    onPress={toggleTimePicker}
                    style={styles.pressableContainer}
                  >
                    <TextInput
                      style={styles.textInput}
                      placeholder="Time"
                      placeholderTextColor="#000000"
                      value={formData.time}
                      onChangeText={(text) => handleInputChange("date", text)}
                      editable={false}
                    />
                    <FontAwesome
                      name="clock-o"
                      size={24}
                      color="black"
                      style={styles.calendarIcon}
                    />
                  </Pressable>
                )}
              </View>

              <View>
                <TextInput
                  style={styles.textDetails}
                  placeholder="Details"
                  placeholderTextColor="#000000"
                  value={formData.details}
                  onChangeText={(text) => handleInputChange("detail", text)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.textInstruction}
                  placeholder="Instruction"
                  placeholderTextColor="#000000"
                  value={formData.instruction}
                  onChangeText={(text) =>
                    handleInputChange("instruction", text)
                  }
                />
              </View>

              <View style={styles.leaderContainer}>
                <Text style={styles.leadertextInput}>
                  Selected Leader : {selectedUser ? selectedUser.name : "None"}
                </Text>
                <TouchableOpacity
                  style={styles.leaderaddButton}
                  onPress={() => navigation.navigate("View Users")}
                >
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleCloseModal}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
  // textInput: {
  //   height: 50,
  //   flex: 1,
  //   padding: 10,
  //   marginLeft: 20,
  //   color: "#000000",
  // },
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
    // alignItems:"stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
  },
  modalContent: {
    // backgroundColor: "white",
    padding: 0.5,
    paddingStart: 0,
    borderRadius: 10,
    width: "85%",
  },
  textInput: {
    height: 35,
    // borderColor: "gray",
    // borderWidth: 1,
    // marginBottom: 10,
    // paddingHorizontal: 10,
    // borderRadius: 5,
    // alignContent:"flex-start"
    flex: 1, // Take remaining space
    marginRight: 10, // Add margin between TextInput and icon
  },
  textInstruction: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlignVertical: "top",
    paddingVertical: 10,
  },
  textDetails: {
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
  leaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leaderaddButton: {
    backgroundColor: "#003e6d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    height: 36,
  },
  leadertextInput: {
    height: 35,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    textAlign: "center",
    // alignContent: "flex-start",
    // alignItems:"center",
    paddingVertical: 6,
    flex: 1, // Take remaining space
    marginRight: 10, // Add margin between TextInput and icon
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
  dropdown: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 5,
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
  calendarIcon: {
    marginLeft: "auto", // Move icon to the right edge
  },
  pressableContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1, // Add border for visualization
    borderRadius: 5, // Add border radius for visualization
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    borderColor: "gray",
  },
});
const Stack = createStackNavigator();

export default EditSevaDetails;
