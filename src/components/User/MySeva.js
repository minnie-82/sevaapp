
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import SevaNotificationCard from './SevaNotificationCard';
import SevaCardOngoing  from './SevaCardOngoing';
import SevaCardCompleted from './SevaCardCompleted';

const Myseva = () => {
    const navigation = useNavigation();

    const goToHomePage = () => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={{ marginTop: 30, width: "100%", backgroundColor: "white", flex: 1, flexDirection: "column", alignItems: "center" }}>
                        <View style={{ width: "100%", backgroundColor: "transparent", flex: 0, flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
                            <TouchableOpacity onPress={goToHomePage}>
                                <View style={{ width: 45, height: 45, backgroundColor: "transparent", flex: 0, alignItems: "center", justifyContent: "center", borderRadius: 100, backgroundColor: "transparent", borderColor: "#070606", borderWidth: 0.7, transform: [{ rotateZ: '-90deg' }], marginLeft: 20, marginTop: 10 }}>
                                    <FontAwesome name='long-arrow-up' size={25} color={"#070606"} />
                                </View>
                            </TouchableOpacity>

                            <View style={{ backgroundColor: "transparent", marginLeft: 40, marginTop: 30, justifyContent: "center", width: "100%" }}>
                                <Image
                                    source={require("../../../assets/splashwithoutbg.png")}
                                    style={{ height: 90, width: 150 }}
                                />
                            </View>
                        </View>

                        

                        <View style={{ width: "100%", height: '100%', flex: 0, alignItems: "center", justifyContent: "start" }}>
                            <SevaCardOngoing/>
                           <SevaCardCompleted/>
                            
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

export default Myseva;
