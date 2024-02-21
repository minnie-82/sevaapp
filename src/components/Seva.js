import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Login";
const Seva=()=>{
    return(
        <View style={styles.container}>
            <Login/>
        </View>
       );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
     justifyContent: 'center', // Vertically center the content
     // Horizontally center the content
    },
  });
export default Seva;