import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Adddepartment =()=>{
   return(
       <View style={styles.container}>
        <Text>Add Department</Text>
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

export default Adddepartment;
