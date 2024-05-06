import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import SaveInfoAdd from "./SevaInfoAdd";
const SelectUserScreen = ({ navigation, route }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelection = (user) => {
    // Pass the selected user back to the parent screen
    route.params.handleAddUser(user);
    navigation.navigate("SaveInfoAdd"); // Navigate back to the parent screen
  };

  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a User</Text>
      {users.map((user) => (
        <TouchableOpacity
          key={user.id}
          style={styles.userContainer}
          onPress={() => handleUserSelection(user)}
        >
          <Text style={styles.userName}>{user.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  userContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
  },
});

export default SelectUserScreen;
