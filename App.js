import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Seva from './src/components/Seva';
import Home from './src/components/Home';
import Login from './src/components/Login';
import  AdminHome from "./src/components/Admin/AdminHome.js"

export default function App() {
  return (
    
    
      <AdminHome/>
     
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
