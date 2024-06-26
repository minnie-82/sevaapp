import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback,SafeAreaView, ScrollView ,Animated} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { AntDesign, Entypo } from "@expo/vector-icons";

const Addadmin =()=>{
    const navigation = useNavigation();

  const goToHomePage = () => {
    navigation.navigate('Dashboard');
  };

  const handleOpenModal = () => {
    navigation.navigate('AdminInfoAdd');
  };


  const [admins, setAdmins] = useState([
    { id: '1', name: 'Admin 1', phoneNumber: '981-933-4535' },
    { id: '2', name: 'Admin 2', phoneNumber: '996-739-0340' },
    { id: '3', name: 'Admin 3', phoneNumber: '720-856-3542' },
    // Add more users as needed
  ]);

  const handleCallAdmin = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;
  
    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneUrl);
        } else {
          console.log("Phone call not supported");
        }
      })
      .catch((error) => console.error("An error occurred", error));
  };

  const handleDeleteAdmin = (adminId) => {
    const updatedAdmins = admins.filter(admin => admin.id !== adminId);
    setAdmins(updatedAdmins);
  };
  

   return(
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8E9C8" }}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={{ marginTop: 30, width: "100%", flex: 1, alignItems: "center" }}>
          <View style={{ width: "100%", backgroundColor: "transparent", flex: 0, flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
            <TouchableOpacity onPress={goToHomePage}>
              <View style={{ width: 45, height: 45, backgroundColor: "transparent", flex: 0, alignItems: "center", justifyContent: "center", borderRadius: 100, backgroundColor: "transparent", borderColor: "#070606", borderWidth: 0.7, transform: [{ rotateZ: '-90deg' }], marginLeft: 20, marginTop: 10 }}>
                <FontAwesome name='long-arrow-up' size={25} color={"#070606"} />
              </View>
            </TouchableOpacity>

            <View style={{ backgroundColor: "transparent", marginLeft: 40, marginTop: 30,marginBottom: 30, justifyContent: "center", width: "100%" }}>
              <Image
                source={require("../../../assets/splashwithoutbg.png")}
                style={{ height: 90, width: 150 }}
              />
            </View>
          </View>

          {/* Display users */}
          {admins.map(admin => (
            <View key={admin.id} style={styles.adminCard}>
              <Text style={styles.adminName}>{admin.name} </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleCallAdmin(admin.phoneNumber)}>
                <FontAwesome name='phone' size={25} color={"blue"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteAdmin(admin.id)} style={{marginLeft:10}}>
                <FontAwesome name='trash' size={25} color={"red"} />
              </TouchableOpacity>
            </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
    <TouchableWithoutFeedback onPress={handleOpenModal}>
      <Animated.View style={[styles.floatingButton, styles.menu]}>
        <AntDesign name="plus" size={24} color="#FFF"></AntDesign>
      </Animated.View>
    </TouchableWithoutFeedback>
  </SafeAreaView>
   );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    adminCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      marginBottom: 10,
      width: '80%',
    },
    adminName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    floatingButton: {
      position: "absolute",
      width: 50,
      height: 50,
      borderRadius: 60 / 2,
      alignItems: "center",
      justifyContent: "center",
      shadowRadius: 10,
      shadowColor: "#003e6d",
      shadowOpacity: 0.3,
      shadowOffset: { height: 10 },
      right: 20,
      bottom: 50,
    },
    menu: {
      backgroundColor: "#003e6d",
    },
  });
export default Addadmin;
