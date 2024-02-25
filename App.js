import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  AdminHome from "./src/components/Admin/AdminHome";
import UserHome from './src/components/User/UserHome';
import Login from './src/components/Login';

export default function App() {
  return (
    
    <Login/>
     
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
