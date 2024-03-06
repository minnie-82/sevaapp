import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  AdminHome from "./src/components/Admin/AdminHome";
import UserHome from './src/components/User/UserHome';
import Login from './src/components/Login';
import UserProfile from './src/components/User/UserProfile';
import SevaDetails from './src/components/User/SevaDetails';

export default function App() {
  return (

        <UserHome/>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
