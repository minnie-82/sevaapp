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
} from "react-native";

const Dashboard=()=>{
    return(
    <View style={styles.container}>
        <Text style={styles.text}>Dashboard</Text>
      
    </View>
    );
}
export default Dashboard;

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});