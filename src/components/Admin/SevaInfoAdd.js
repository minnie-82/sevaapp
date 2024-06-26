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
// import SelectUserScreen from "./SelectUserScreen";
// import AddButton from "./AddButton";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MultipleUserSelect from "./MultipleUserSelect";
import { useRoute } from "@react-navigation/native";
import { API_ENDPOINT } from "../global";
import { addSeva } from "../seva_api";

const SevaInfoAdd = () => {
  const route = useRoute();
  // const { selectedUsers } = route.params;

  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    banner: "",
    description: "",
  });

  // const saveData = async () => {
  //   try {
  //     console.log("Adding seva...");
  //     const selectedItem = data.find(item => item.value === value);

  //     const response = await fetch(`${API_ENDPOINT}addseva`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: selectedItem ? selectedItem.label : "",
  //         dep_id:value,
  //         description: formData.description,
  //         date: dateData,
  //         start_time: timeData,
  //         banner: formData.banner,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to add seva");
  //     }

  //     const responseData = await response.json();
  //     console.log("Seva added successfully:", responseData);
  //     return responseData;
  //   } catch (error) {
  //     console.error("Error adding seva:", error.message);
  //     throw error;
  //   }
  // };
  const addSevaHandler = async () => {
    try {
      const selectedItem = data.find((item) => item.value === value);
      await addSeva({
        name: selectedItem ? selectedItem.label : "",
        dep_id: value,
        description: formData.description,
        date: dateData,
        start_time: timeData,
        banner: formData.banner,
      });
    } catch (error) {
      console.error("Error adding seva:", error.message);
    }
  };
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedLeader, setSelectedLeader] = useState(null);

  const handleLeader = (user) => {
    setSelectedLeader(user);
  };

  const handleAddUser = (user) => {
    setSelectedUser(user);
    console.log("from sevainfoscreen : ", user);
  };

  const data = [
    { label: "Nilkanth Mandapam", value: "1" },
    { label: "Cleanliness", value: "2" },
    { label: "Medical Department", value: "3" },
    { label: "Prasad Vitran", value: "4" },
    { label: "Sabha Vaivastha", value: "5" },
  ];
  const [value, setValue] = useState(null); //state
  const [isFocus, setIsFocus] = useState(false);

  //datetimepiker
  const [dateData, setDateData] = useState("");
  const [date, setDate] = useState(new Date()); //state
  const [showPicker, setShowPicker] = useState(false);
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  // const onChange = ({ type }, selectedDate) => {
  //   if (type == "set") {
  //     const currentDate = selectedDate;
  //     setDate(currentDate);
  //     if (Platform.OS === "android") {
  //       toggleDatePicker();
  //       setDateData(currentDate.toDateString());
  //     }
  //   } else {
  //     toggleDatePicker();
  //   }
  // };
  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      // Extract and format date in 'DD-MM-YYYY' format
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const year = currentDate.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;

      if (Platform.OS === "android") {
        toggleDatePicker();
      }
      setDateData(formattedDate);

      console.log(formattedDate); // For debugging
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
      const currentTime = selectedTime || new Date();
      console.log(currentTime);
      setTime(currentTime);
      // Format the time to 'HH:MM:SS' or 'HH:MM AM/PM'
      const formattedTime = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // Set to true for 'HH:MM AM/PM' format
      });
      console.log(formattedTime);

      if (Platform.OS === "android") {
        toggleTimePicker();
        // setTimeData(currentTime.toLocaleTimeString());
        // console.log(setTimeData);
      }
      setTimeData(formattedTime);
    } else {
      toggleTimePicker();
    }
  };

  const handleCloseModal = () => {
    navigation.navigate("Addseva");
  };

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8E9C8" }}>
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
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
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
                      value={dateData}
                      onChangeText={setDateData}
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
                      value={timeData}
                      onChangeText={setTimeData}
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
                  placeholder="Banner"
                  placeholderTextColor="#000000"
                  value={formData.banner}
                  onChangeText={(text) => handleInputChange("banner", text)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.textInstruction}
                  placeholder="Description"
                  placeholderTextColor="#000000"
                  value={formData.description}
                  onChangeText={(text) =>
                    handleInputChange("description", text)
                  }
                />
              </View>

              <View style={styles.leaderContainer}>
                <Text style={styles.leadertextInput}>
                  Selected Leader :{" "}
                  {selectedLeader ? selectedLeader.name : "None"}
                </Text>
                <TouchableOpacity
                  style={styles.leaderaddButton}
                  onPress={() =>
                    navigation.navigate("View Users", {
                      handleLeader,
                      page: "SaveInfoAdd",
                    })
                  }
                >
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              </View>
              {/* multiple */}
              <View style={styles.multipleUserContainer}>
                <Text style={styles.multipletextInput}>
                  Selected SwayamSevak :
                  {selectedUser
                    ? Object.keys(selectedUser).map((key, index) => {
                        return (
                          <Text key={index}>
                            {selectedUser[key].name + "\n"}
                          </Text>
                        );
                      })
                    : "None"}
                </Text>
                <TouchableOpacity
                  style={styles.multipleaddButton}
                  onPress={() =>
                    navigation.navigate("MultipleUserSelect", {
                      functiontoadd: handleAddUser,
                    })
                  }
                >
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText} onPress={addSevaHandler}>
                    Add
                  </Text>
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
    backgroundColor: "white",
    elevation: 10,
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
    backgroundColor: "white",
    elevation: 10,
  },
  addButton: {
    backgroundColor: "#003e6d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    elevation: 10,
  },
  closeButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    elevation: 10,
  },
  buttonText: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    elevation: 10, // Align buttons horizontally
  },
  leaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  multipleUserContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  multipleaddButton: {
    backgroundColor: "#003e6d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    height: 36,
    elevation: 10,
  },
  leaderaddButton: {
    backgroundColor: "#003e6d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    height: 36,
    elevation: 10,
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
    backgroundColor: "white",
    elevation: 10,
  },
  multipletextInput: {
    height: 100,
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
    backgroundColor: "white",
    elevation: 10,
    overflow: "scroll",
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
    backgroundColor: "white",
    elevation: 10,
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
    backgroundColor: "white",
    elevation: 10,
  },
});

export default SevaInfoAdd;
