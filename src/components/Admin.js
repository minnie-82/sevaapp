import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Login";


const Admin =()=>{
    return(
        <View className="p-0  flex-[1] items-center justify-center bg-red-200" >
            <Text>Admin Page</Text>
            <Text>Welcome to Admin Page</Text>
            <Text>Page made using NativeWind ~Tailwind </Text>
            <Text className="bg-white w-full text-center m-2">Demo Page</Text>
        </View>
       );
};

export default Admin;