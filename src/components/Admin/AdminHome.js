import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Myprofile from './Myprofile';
import Department from './Department';
import Seva from './Seva';
import Users from './Users';
const Drawer = createDrawerNavigator();

const AdminHome = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Admin Dashboard", drawerLabel: "Dashboard" }}
        />
        <Drawer.Screen name="My Profile" component={Myprofile} />
        <Drawer.Screen name="Seva" component={Seva} />
        <Drawer.Screen name="Department" component={Department} />
        <Drawer.Screen name="Users" component={Users} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AdminHome;
