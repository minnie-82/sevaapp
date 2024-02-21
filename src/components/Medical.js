import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
const Medical =()=>{
   return(
    <View style={styles.container}>
        {/* <Text style={{marginTop:20,marginBottom:20}}>Welcome to the Medical Department!!!</Text> */}
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

export default Medical;