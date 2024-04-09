import { View, Text } from 'react-native'
import React from 'react'
import ReportCard from './ReportCard';
import { ScrollView } from 'react-native-gesture-handler'

const YourSeva = () => {
  return (
    // <ScrollView horizontal={false}>
        <View style={{width:"100%",height:'100%',flex:0,alignItems:"center",justifyContent:"start",backgroundColor:"white",overflow:'hidden'}}>
        <View style={{width:"80%"}}>
            <Text style={{fontSize:30}}> Seva Report</Text>
        </View>
        <ReportCard/>
        <ReportCard/>
        <ReportCard/>
        <ReportCard/>
        <ReportCard/>
    </View>
    // </ScrollView>
  )
}

export default YourSeva