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
  Alert,
  Animated,
  TouchableWithoutFeedback,
  Modal,
  Pressable,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import AllSevaCard from "./AllSevaCard";
import { AntDesign, Entypo } from "@expo/vector-icons";
const Addseva = () => {
  //   const navigation = useNavigation();

  //   const goToHomePage = () => {
  //     navigation.navigate("Home");
  //   };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    date: "",
    time: "",
    instruction: "",
  });

  const [dateData, setDateData] = useState("");

  const data = [
    { label: "Nilkanth Mandapam", value: "1" },
    { label: "Cleanliness", value: "2" },
    { label: "Medical Department", value: "3" },
    { label: "Prasad Vitran", value: "4" },
    { label: "Sabha Vaivastha", value: "5" },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  //datetimepiker

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

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const onButtonPress = () => {
    Alert.alert("Button Pressed");
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
  const AddStyle = {
    transform: [
      {
        scale: this.animation,
      },
      {
        translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80],
        }),
      },
    ],
  };
  const Add2Style = {
    transform: [
      {
        scale: this.animation,
      },
      {
        translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }),
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
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
                  marginTop: 10,
                  marginBottom: 10,
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
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={handleCloseModal}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  {/* Form fields */}
                  {/* <TextInput
                    style={styles.textInput}
                    placeholder="Department"
                    placeholderTextColor="#000000"
                    value={formData.department}
                    onChangeText={(text) =>
                      handleInputChange("department", text)
                    }
                  /> */}
                  <Dropdown
                    style={[
                      styles.dropdown,
                      isFocus && { borderColor: "blue" },
                    ]}
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
                      <Pressable onPress={toggleDatePicker}>
                        <TextInput
                          style={styles.textInput}
                          placeholder="12 Aug 2024"
                          placeholderTextColor="#000000"
                          value={dateData}
                          onChangeText={setDateData}
                          editable={false}
                        />
                      </Pressable>
                    )}
                  </View>

                  <TextInput
                    style={styles.textInput}
                    placeholder="Time"
                    placeholderTextColor="#000000"
                    value={formData.time}
                    onChangeText={(text) => handleInputChange("time", text)}
                    
                  />
                  <TextInput
                    style={styles.textInstruction}
                    placeholder="Instruction"
                    placeholderTextColor="#000000"
                    value={formData.instruction}
                    onChangeText={(text) =>
                      handleInputChange("instruction", text)
                    }
                  />

                  {/* Add and close buttons */}
                  {/* <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.buttonText}>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={handleCloseModal}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity> */}
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
              </View>
            </Modal>

            {/* <View
              style={{
                flex: 0,
                alignItems: "start",
                justifyContent: "center",
                width: "95%",
                height: 50,
                backgroundColor: "white",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Department"
                placeholderTextColor="#000000"
              />
            </View>
            <View
              style={{
                flex: 0,
                alignItems: "start",
                justifyContent: "center",
                width: "95%",
                height: 50,
                backgroundColor: "white",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Date"
                placeholderTextColor="#000000"
              />
            </View>

            <View
              style={{
                flex: 0,
                alignItems: "start",
                justifyContent: "center",
                width: "95%",
                height: 50,
                backgroundColor: "white",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Time"
                placeholderTextColor="#000000"
              />
            </View>
            <View
              style={{
                flex: 0,
                alignItems: "start",
                justifyContent: "center",
                width: "95%",
                height: 50,
                backgroundColor: "white",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Instruction"
                placeholderTextColor="#000000"
              />
            </View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>
                Add
              </Text>
            </TouchableOpacity> */}

            <View
              style={{
                width: "100%",
                height: "100%",
                flex: 0,
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <AllSevaCard />
              <AllSevaCard />
            </View>
            {/* <TouchableOpacity
              style={styles.floatingButton}
              onPress={onButtonPress}
            >
              <Ionicons name="add-circle" size={50} color="#003e6d" />
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
      {/* <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.floatingButton, styles.secondary, Add2Style]}
        >
          <Entypo name="plus" size={20} color="#003e6d"></Entypo>
        </Animated.View>
      </TouchableWithoutFeedback> */}

      {/* <TouchableWithoutFeedback onPress={handleOpenModal}>
        <Animated.View
          style={[styles.floatingButton, styles.secondary, AddStyle]}
        >
          <Entypo name="plus" size={20} color="#003e6d"></Entypo>
        </Animated.View>
      </TouchableWithoutFeedback> */}

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
    // alignContent:"flex-start"
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
  dropdown: {
    height: 40,
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
});

export default Addseva;
