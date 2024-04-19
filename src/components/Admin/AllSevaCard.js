import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AllSevaCard = () => {
  const navigation = useNavigation();

  const EditSelection = (
    department,
    datecome,
    timecome,
    details,
    instruction
  ) => {
    // Navigate to EditSevaDetails screen and pass data as route parameters
    navigation.navigate("EditSevaDetails", {
      department,
      datecome,
      timecome,
      details,
      instruction,
    });
  };
  return (
    <View>
      <View style={styles.cardContainerN}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nilkanth Mandapam</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.iconTextContainer}>
            <FontAwesome name="calendar" size={15} color={"#808080"} />
            <Text style={styles.dateText}>25 Febuary, 2024</Text>
            <TouchableOpacity
              style={{
                height: 30,
                // backgroundColor: "#003e6d",
                flex: 1,

                alignItems: "center",
                justifyContent: "flex-end",
                gap: 5,
                flexDirection: "row",
                borderRadius: 30,
              }}
            >
              <FontAwesome
                name="edit"
                size={15}
                color={"#808080"}
                style={{ paddingLeft: 0 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  flex: 0,
                  color: "#808080",
                  justifyContent: "space-evenly",
                }}
                onPress={() =>
                  EditSelection(
                    "Nilkanth Mandapam",
                    "25 Febuary, 2024",
                    "12.00PM",
                    "XYZassd",
                    "ABCsfsdgsd"
                  )
                }
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.cardContainerC}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cleanliness</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.iconTextContainer}>
            <FontAwesome name="calendar" size={15} color={"#808080"} />
            <Text style={styles.dateText}>25 Febuary, 2024</Text>
            <TouchableOpacity
              style={{
                height: 30,
                // backgroundColor: "#003e6d",
                flex: 1,

                alignItems: "center",
                justifyContent: "flex-end",
                gap: 5,
                flexDirection: "row",
                borderRadius: 30,
              }}
            >
              <FontAwesome
                name="edit"
                size={15}
                color={"#808080"}
                style={{ paddingLeft: 0 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  flex: 0,
                  color: "#808080",
                  justifyContent: "space-evenly",
                }}
                onPress={() =>
                  EditSelection(
                    "Cleanliness",
                    "25 Febuary, 2024",
                    "12.00PM",
                    "XYZassd",
                    "ABCsfsdgsd"
                  )
                }
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.cardContainerM}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Medical Department</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.iconTextContainer}>
            <FontAwesome name="calendar" size={15} color={"#808080"} />
            <Text style={styles.dateText}>25 Febuary, 2024</Text>
            <TouchableOpacity
              style={{
                height: 30,
                // backgroundColor: "#003e6d",
                flex: 1,

                alignItems: "center",
                justifyContent: "flex-end",
                gap: 5,
                flexDirection: "row",
                borderRadius: 30,
              }}
            >
              <FontAwesome
                name="edit"
                size={15}
                color={"#808080"}
                style={{ paddingLeft: 0 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  flex: 0,
                  color: "#808080",
                  justifyContent: "space-evenly",
                }}
                onPress={() =>
                  EditSelection(
                    "Medical Department",
                    "25 Febuary, 2024",
                    "12.00PM",
                    "XYZassd",
                    "ABCsfsdgsd"
                  )
                }
              >
                Edit
              </Text>
            </TouchableOpacity>
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
    backgroundColor: "#F8D1C8",
    borderRadius: 10,
    margin: 10,
  },
  cardContainerC: {
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#dbef84",
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

export default AllSevaCard;
