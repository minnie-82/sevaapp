import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from "@expo/vector-icons";

const SevaNotificationCard = () => {
    return (
        <View>
        <View style={styles.cardContainerN}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Nilkanth Mandapam</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.iconTextContainer}>
                    <FontAwesome name='calendar' size={15} color={"#808080"} />
                    <Text style={styles.dateText}>25 Febuary, 2024</Text>
                </View>
            </View>
        </View>
        <View style={styles.cardContainerC}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Cleanliness</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.iconTextContainer}>
                    <FontAwesome name='calendar' size={15} color={"#808080"} />
                    <Text style={styles.dateText}>25 Febuary, 2024</Text>
                </View>
            </View>
        </View>
        <View style={styles.cardContainerM} >
            <View style={styles.titleContainer} >
                <Text style={styles.title}>Medical Department</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.iconTextContainer}>
                    <FontAwesome name='calendar' size={15} color={"#808080"} />
                    <Text style={styles.dateText}>25 Febuary, 2024</Text>
                </View>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainerN: {
        alignItems: "stretch",
        justifyContent: "center",
        backgroundColor: "#7FFFD4",
        borderRadius: 10,
        margin: 10,
    },
    cardContainerC: {
        alignItems: "stretch",
        justifyContent: "center",
        backgroundColor: "#ffa500",
        borderRadius: 10,
        margin: 10,
    },
    cardContainerM: {
        alignItems: "stretch",
        justifyContent: "center",
        backgroundColor: "#87ceeb",
        borderRadius: 10,
        margin: 10,
    },
    titleContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 30,
        color: "#000", // Set your desired text color
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    iconTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
    },
    dateText: {
        color: "#808080",
    },
});

export default SevaNotificationCard;
