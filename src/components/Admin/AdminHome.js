import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Seva from '../Seva';
import Medical from '../Medical';
import Dashboard from './Dashboard';

const Drawer = createDrawerNavigator();

const AdminHome = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "My dashboard", drawerLabel: "Dashboard label" }}
        />
        
        <Drawer.Screen name="Med" component={Medical} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AdminHome;
