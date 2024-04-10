import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ContactDiaryPage = () => {
  // Sample data for users
  const [users, setUsers] = useState([
    { id: '1', name: 'John Doe', phoneNumber: '123-456-7890' },
    { id: '2', name: 'Jane Smith', phoneNumber: '987-654-3210' },
    // Add more users as needed
  ]);

  // Function to render each user item in the list
  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={() => handleCallUser(item.phoneNumber)}>
        <Text style={styles.callButton}>Call</Text>
      </TouchableOpacity>
    </View>
  );

  // Function to handle calling a user
  const handleCallUser = (phoneNumber) => {
    // Implement calling functionality here using phone number
    console.log(`Calling ${phoneNumber}`);
  };

  // Function to navigate to create user form page
  const handleAddUser = () => {
    // Implement navigation to create user form page here
    console.log('Navigate to create user form page');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity onPress={handleAddUser}>
        <Text style={styles.addButton}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  callButton: {
    color: 'blue',
  },
  addButton: {
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ContactDiaryPage;
