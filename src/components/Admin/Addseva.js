import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AllSevaCard from "./AllSevaCard";
const Addseva = () => {
  //   const navigation = useNavigation();

  //   const goToHomePage = () => {
  //     navigation.navigate("Home");
  //   };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
              {/* <TouchableOpacity>
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
              </TouchableOpacity> */}

              <View
                style={{
                  backgroundColor: "transparent",
                  marginLeft: 100,
                  marginTop: 10,
                  marginBottom:10,
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
              {/* <Text style={{ marginLeft: 20, fontSize: 15 }}>Seva</Text> */}
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
              {/* <Text style={{ marginLeft: 20, fontSize: 15 }}>Seva</Text> */}
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
              {/* <Text style={{ marginLeft: 20, fontSize: 15 }}>Seva</Text> */}
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
              {/* <Text style={{ marginLeft: 20, fontSize: 15 }}>Seva</Text> */}
              <TextInput
                style={styles.textInput}
                placeholder="Instruction"
                placeholderTextColor="#000000"
              />
            </View>

            {/* <View style={styles.inputView}>
              <TextInput
                style={styles.textInput}
                placeholder="Add Seva"
                placeholderTextColor="#000000"
              />
            </View> */}
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>
                {/* {loading ? "Signing In ... " : "Sign In"} */}
                Add
              </Text>
            </TouchableOpacity>

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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: "#000000",
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
});

export default Addseva;
