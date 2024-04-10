// ParentComponent.js

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectUserScreen from './SelectUserScreen';

const ParentComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ParentScreen">
        <Stack.Screen
          name="ParentScreen"
          options={{ title: 'Parent Screen' }}
        >
          {({ navigation }) => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Selected User: {selectedUser ? selectedUser.name : 'None'}</Text>
              <Button
                title="Add User"
                onPress={() => navigation.navigate('SelectUserScreen', { handleAddUser })}
              />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="SelectUserScreen"
          component={SelectUserScreen}
          options={{ title: 'Select User' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

export default ParentComponent;
