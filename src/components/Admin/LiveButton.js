import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const MultipleUserSelect = ({}) => {
  const [users, setUsers] = useState([
    { id: "1", name: "User 1", isSelected: false },
    { id: "2", name: "User 2", isSelected: false },
    { id: "3", name: "User 3", isSelected: false },
    // Add more users as needed
  ]);

  const toggleUserSelection = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, isSelected: !user.isSelected } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {users.map((user) => (
          <View key={user.id} style={styles.userItem}>
            <CheckBox
              value={user.isSelected}
              onValueChange={() => toggleUserSelection(user.id)}
            />
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default MultipleUserSelect;
