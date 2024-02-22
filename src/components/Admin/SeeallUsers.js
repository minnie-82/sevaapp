import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SeeallUser = ()=>{
    return(
        <View style={styles.container}>
        <Text>View all User</Text>
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
export default SeeallUser;