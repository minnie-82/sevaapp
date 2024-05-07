import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { API_ENDPOINT } from "./global";
import { useNavigation } from "@react-navigation/native";
// import UserHome from "./User/UserHome";
// import HomeScreen from './User/UserHome'
import { addUser, updateUser } from "./User/user_api";
import { addAdmin } from "./Admin/admin_api";
import { getAllSeva } from "./seva_api";
import { useUser } from "./global";
// import AdminHome from "./Admin/AdminHome";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("user");
  const [userId, setUserId] = useState("");
  const { setUserData } = useUser();
  // const { userData, setUserData } = useUser();
  // const newuserdta = {
  //   fname: "dummy",
  //   lname: "data",
  //   age: "10",
  //   address: "borivali",
  //   keshatra: "2A",
  //   dob: "2014-01-01",
  //   is_student: "yes",
  //   is_working: "no",
  //   occupation: "no",
  //   role: "User",
  //   email: "dummmy@gmail.com",
  //   phone_no: "7898789868",
  // };

  // const adminData = {
  //   fname: 'Arshyogi',
  //   lname: 'Swaki',
  //   email: 'arshyogidas@example.com',
  //   phone_no: '7867569080'
  // };

  var saveData = () => {
    if (!email) {
      alert("Kindle enter Email");
      return false;
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(email) === false) {
        SetError(true);
        return false;
      } else {
        SetError(false);
      }
    }
    if (!password) {
      alert("Kindle enter Password");
      return false;
    }

    // alert("API CALL HERE")
    //add api logic here
    setLoading(true);
    console.log(`${API_ENDPOINT}authenticate/${type}`);
    fetch(`${API_ENDPOINT}authenticate/${type}`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response);
      })
      .then((json) => {
        setLoading(false);
        console.log(json);
        // Check if user_id is available in the response
        if (json.user_id || json.admin_id) {
          setUserId(json.user_id); // Store user_id in state variable
          console.log("User authenticated successfully:", json);
          alert(`${type} logged in successfully`);
          // navigation.navigate(`${UserHome}`);
          if (json.role == "User") {
            // navigation.navigate(`${}`);
            //add navigation of userHome
            navigation.navigate("Home");
            fetchUserData(json.user_id);
          } else {
            // navigate to admin screen here
            navigation.navigate("Admin");
          }

          // Call the next API to fetch user data using the user_id

          //Just for checking purpose
          //addUser(newuserdta);
          // updateUser("2", newuserdta);
          // addAdmin(adminData);
          // getAllSeva();

          // navigation.navigate('UserHome');
        } else {
          throw new Error("User_id not found in response");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  const fetchUserData = (userId) => {
    const apiUrl = `${API_ENDPOINT}getuser/${userId}`;

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
        if (type === "user") {
          fetchUserSeva(userId);
          navigation.navigate("Home");
        } else if (type === "admin") {
          // fetchAdminSeva(userId);
        } else {
          throw new Error("Invalid user type");
        }

        // Now you can do something with the user data, e.g., store it in state
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  };

  const fetchUserSeva = (userId) => {
    // API call to fetch user service data
    fetch(`${API_ENDPOINT}user_specific_data/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Failed to fetch seva data");
      })
      .then((data) => {
        console.log("User seva data:", data);
        // updateSevaData(data);
      })
      .catch((error) => {
        console.error("Error fetching admin service data:", error);
      });
  };

  const fetchAdminSeva = (userId) => {
    // API call to fetch admin service data
    fetch(`${API_ENDPOINT}getallseva`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Failed to fetch seva data");
      })
      .then((data) => {
        console.log("Admin seva data:", data);
      })
      .catch((error) => {
        console.error("Error fetching admin service data:", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "20%", marginTop: 0 }}>
        <Image
          source={require("../../assets/splash.png")}
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.title}>Sign In</Text>
      <View
        style={{
          width: "80%",
          flex: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          gap: 5,
          padding: 20,
        }}
      >
        <Text>Sign In as ?</Text>
        <TouchableOpacity
          style={[
            styles.RadioBtn,
            type === "admin"
              ? { backgroundColor: "#ff8e01" }
              : { backgroundColor: "#003e6d" },
          ]}
          onPress={() => {
            setType("admin");
          }}
        >
          <Text style={styles.loginText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.RadioBtn,
            type === "user"
              ? { backgroundColor: "#ff8e01" }
              : { backgroundColor: "#003e6d" },
          ]}
          onPress={() => {
            setType("user");
          }}
        >
          <Text style={styles.loginText}>User</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#000000"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      {error ? (
        <View>
          <Text style={{ color: "red", marginTop: 0, marginBottom: 10 }}>
            Email is invalid!
          </Text>
        </View>
      ) : (
        <View>
          <Text></Text>
        </View>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={saveData}>
        <Text style={styles.loginText}>
          {loading ? "Signing In ... " : "Sign In"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: "80%" }}>
        <Text style={styles.forgotButton}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003e6d",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "left",
    width: "80%",
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
  forgotButton: {
    color: "#003e6d",
    marginTop: 20,
    marginBottom: 30,
    textAlign: "right",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#003e6d", // Orange color
  },
  loginText: {
    color: "#ffffff",
    fontSize: 18,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  RadioBtn: {
    width: "30%",
    borderRadius: 10,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003e6d",
    marginLeft: 10,
  },
});

export default Login;
