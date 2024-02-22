import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Addadmin from './Addadmin';
import Addseva from './Addseva';
import Adddepartment from './Adddepartment';
import SeeallUser from './SeeallUsers';
import SevaNotification from './SevaNotification';

const Drawer = createDrawerNavigator();

const AdminHome = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "My dashboard"}}
        />
        <Drawer.Screen name="Admin" component={Addadmin} />
        <Drawer.Screen name="Seva" component={Addseva} />  
        <Drawer.Screen name="Department" component={Adddepartment} />
        <Drawer.Screen name="Seva Notification" component={SevaNotification} />
        <Drawer.Screen name="View Users" component={SeeallUser} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AdminHome;
