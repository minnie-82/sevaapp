import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native';
import {NavigationContainer, NavigationHelpersContext} from '@react-navigation/native';
import {createNativeStackNavigator}  from '@react-navigation/native-stack';

import Medical from "./Medical";
import Cleanliness from "./Cleanliness";
import Admin from "./Admin";
import Seva from "./Seva";

function Home ({navigation}){
    const medical =()=>{
      navigation.navigate('Medical');
    }
  
    const admin=()=>{
      navigation.navigate('Admin');
    }
  
    const cleanliness=()=>{
      navigation.navigate('Cleanliness');
    }
  
    const nilkanth=()=>{
      navigation.navigate('Nilkanth');
    }
  
     return(
    
         <View style={{padding:20,width:'100%'}}>
                  
                  
                 
                  <View style={{marginTop:20,marginBottom:20}}>
                    <Button  title="MEDICAL" onPress={medical} />  
                       </View>
  
                       <View style={{marginTop:20,marginBottom:20}}>
                    <Button  title="CLEANLINESS" onPress={cleanliness} /> 
                    </View>
  
                    <View style={{marginTop:20,marginBottom:20}}>
                    <Button  title="NILKANTH" onPress={nilkanth} /> 
                    </View>
  
                    <View style={{marginTop:20,marginBottom:20}}>
                    <Button  title="ADMIN" onPress={admin} /> 
                    </View>
  
  
                </View>
  
     );
  
  
  };
  
  
  const styles=StyleSheet.create({
  body:{
            flex:1,
            alignItems:'center',
        }
      });
  

const  Stack=createNativeStackNavigator();

const App1 =()=>
{
   return(
     <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Seva" component={Home}/>
      <Stack.Screen name="Medical"  component={Medical}/>
      <Stack.Screen name="Cleanliness"  component={Cleanliness}/>
      <Stack.Screen name="Admin"  component={Admin}/>
      <Stack.Screen name="Nilkanth"  component={Seva}/>
            </Stack.Navigator>
     </NavigationContainer>
   );
}
export default App1;