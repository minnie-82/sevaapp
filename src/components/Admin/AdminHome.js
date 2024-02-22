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
import CustomDrawer from './CustomDrawer';
import { FontAwesome } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const AdminHome = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerContent={props=> <CustomDrawer {...props}/>} screenOptions={{headerShown:true,drawerActiveBackgroundColor:"#3399ff",drawerActiveTintColor:"#fff",drawerLabelStyle:{marginTop:6,marginLeft:-20}}}>
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={
            {
              drawerIcon:({color})=>(<FontAwesome name='home' size={22} color={color}/>)
            }
          }
        />
        <Drawer.Screen name="Admin" component={Addadmin} options={
            {
              drawerIcon:({color})=>(<FontAwesome name='user-plus' size={22} color={color}/>)
            }
          }/>
        <Drawer.Screen name="Seva" component={Addseva} options={
            {
              drawerIcon:({color})=>(<FontAwesome name='plus' size={22} color={color}/>)
            }
          }  />  
        <Drawer.Screen name="Department" component={Adddepartment} options={
            {
              drawerIcon:({color})=>(<FontAwesome name='sitemap' size={22} color={color}/>)
            }
          } />
        <Drawer.Screen name="Seva Notification" component={SevaNotification} options={
            {
              drawerIcon:({color})=>(<FontAwesome name='bell' size={22} color={color}/>)
            }
          } />
        <Drawer.Screen name="View Users" component={SeeallUser} options={
            {
              drawerIcon:({color})=>(<FontAwesome name='users' size={22} color={color}/>)
            }
          } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AdminHome;
