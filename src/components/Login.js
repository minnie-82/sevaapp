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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("user");
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
    fetch(`https://10a2-42-106-206-123.ngrok-free.app/authenticate/${type}`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((reponse) => {
        if (reponse.status === 200) {
          return reponse.json();
        }
        throw new Error("Authentication error");
      })
      .then((json) => {
        setLoading(false);
        alert(`${type}` + " logged in successfully"); //intead add a logic to navigate to different page based on user type
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
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
