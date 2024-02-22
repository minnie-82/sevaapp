import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Seva from './src/components/Seva';
import Home from './src/components/Home';
import Login from './src/components/Login';
<<<<<<< HEAD
import UserHome from './src/components/user/UserHome';
import Admin from './src/components/Admin';
=======
import  AdminHome from "./src/components/Admin/AdminHome.js"

>>>>>>> 5a556b17fa6fafcfe3efafa207c890ad0e4f094c
export default function App() {
  return (
    
    
<<<<<<< HEAD
      <Admin/>
=======
      <AdminHome/>
>>>>>>> 5a556b17fa6fafcfe3efafa207c890ad0e4f094c
     
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
