import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Seva from './src/components/Seva';
import Home from './src/components/Home';
import Login from './src/components/Login';
import UserHome from './src/components/user/UserHome';
import Admin from './src/components/Admin';
export default function App() {
  return (
    
    
      <Admin/>
     
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
