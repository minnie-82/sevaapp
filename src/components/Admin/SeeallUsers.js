import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const ContactDiaryPage = ({route}) => {
  const navigation = useNavigation();

  const goToHomePage = () => {
    navigation.navigate('Dashboard');
  };
  const handleUserSelection = (user) => {
    // Pass the selected user back to the parent screen
    route.params.handleAddUser(user);
    navigation.navigate("SaveInfoAdd"); // Navigate back to the parent screen
  };

  // Sample data for users
  const [users, setUsers] = useState([
    { id: '1', name: 'Manthan Jadhav', phoneNumber: '981-933-4535' },
    { id: '2', name: 'Akshar Parmar', phoneNumber: '996-739-0340' },
    { id: '3', name: 'Meet Vaghasiya', phoneNumber: '720-856-3542' },

    // Add more users as needed
  ]);

  // Function to handle calling a user
  const handleCallUser = (phoneNumber) => {
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
            {users.map(user => (
              <TouchableOpacity key={user.id} onPress={() => handleUserSelection(user)}>
                <View style={styles.userCard}>
                  <Text style={styles.userName}>{user.name} </Text>
                  <TouchableOpacity onPress={() => handleCallUser(user.phoneNumber)}>
                    <FontAwesome name='phone' size={25} color={"#070606"} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactDiaryPage;
