import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Addadmin =()=>{
   return(
       <View style={styles.container}>
        <Text>Add Admin</Text>
     </View>
   );
};

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
export default Addadmin;
