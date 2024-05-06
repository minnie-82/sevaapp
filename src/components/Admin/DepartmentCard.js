import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AdminSevaDetails from "./AdminSevaDetails";
import EditDepartment from "./EditDepartment";
const DepartmentCard = () => {
  const navigation = useNavigation();

  const handleEdit = (department, datecome, timecome, details, instruction) => {
    navigation.navigate("EditDepartment", {
      department,
      datecome,
      timecome,
      details,
      instruction,
    });
  };
  const sevaDetailsPage = () => {
    navigation.navigate("AdminSevaDetails");
  };

  const EditSelection = (
    department,
    datecome,
    timecome,
    details,
    instruction
  ) => {
    handleEdit(department, datecome, timecome, details, instruction);
  };

  // Function to handle "Edit" button press for the first card
  const handleEditFirstCard = () => {
    EditSelection(
      "Nilkanth Mandapam",
      "25 Febuary, 2024",
      "12.00PM",
      "Come on time",
      "Come before 4pm"
    );
  };

  // Function to handle "Edit" button press for the second card
  const handleEditSecondCard = () => {
    EditSelection(
      "Cleanliness",
      "20 April, 2024",
      "11.00PM",
      "Near Sabha hall",
      "Come on time"
    );
  };

  // Function to handle "Edit" button press for the third card
  const handleEditThirdCard = () => {
    EditSelection(
      "Medical Department",
      "12 March, 2024",
      "2.00PM",
      "Medical Kit",
      "Doctor and nurse"
    );
  };
  return (
    <>
      <TouchableOpacity style={styles.cardContainerN} onPress={sevaDetailsPage}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={require("../../../assets/nilkanth-pic.jpeg")}
            style={styles.logImage}
          ></Image>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            Nilkanth Mandapam
          </Text>

          <Text style={styles.jobType}>
            <FontAwesome name="calendar" size={14} color={"#83829A"} /> 25
            Febuary, 2024
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 20,
            // backgroundColor: "#003e6d",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 5,
            flexDirection: "row",
            borderRadius: 30,
          }}
          onPress={handleEditThirdCard}
        >
          <FontAwesome
            name="edit"
            size={14}
            color={"#83829A"}
            style={{ paddingLeft: 0 }}
          />
          <Text
            style={{
              fontSize: 14,
              color: "white",
              flex: 0,
              color: "#83829A",
              justifyContent: "space-evenly",
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardContainerC} onPress={sevaDetailsPage}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={require("../../../assets/nilkanth-pic.jpeg")}
          style={styles.logImage}
        ></Image>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          Nilkanth Mandapam
        </Text>

        <Text style={styles.jobType}>
          <FontAwesome name="calendar" size={14} color={"#83829A"} /> 25
          Febuary, 2024
        </Text>
      </View>
      <TouchableOpacity
          style={{
            height: 20,
            // backgroundColor: "#003e6d",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 5,
            flexDirection: "row",
            borderRadius: 30,
          }}
          onPress={handleEditThirdCard}
        >
          <FontAwesome
            name="edit"
            size={14}
            color={"#83829A"}
            style={{ paddingLeft: 0 }}
          />
          <Text
            style={{
              fontSize: 14,
              color: "white",
              flex: 0,
              color: "#83829A",
              justifyContent: "space-evenly",
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
    </TouchableOpacity>

    <TouchableOpacity style={styles.cardContainerM} onPress={sevaDetailsPage}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={require("../../../assets/nilkanth-pic.jpeg")}
          style={styles.logImage}
        ></Image>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          Nilkanth Mandapam
        </Text>

        <Text style={styles.jobType}>
          <FontAwesome name="calendar" size={14} color={"#83829A"} /> 25
          Febuary, 2024
        </Text>
      </View>
      <TouchableOpacity
          style={{
            height: 20,
            // backgroundColor: "#003e6d",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 5,
            flexDirection: "row",
            borderRadius: 30,
          }}
          onPress={handleEditThirdCard}
        >
          <FontAwesome
            name="edit"
            size={14}
            color={"#83829A"}
            style={{ paddingLeft: 0 }}
          />
          <Text
            style={{
              fontSize: 14,
              color: "white",
              flex: 0,
              color: "#83829A",
              justifyContent: "space-evenly",
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainerN: {
    flex: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#F8D1C8",
  },
  cardContainerC: {
    flex: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#dbef84",
  },
  cardContainerM: {
    flex: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    backgroundColor: "#87ceeb",
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#F3F4F8",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  textContainer: {
    marginHorizontal: 16,
  },
  jobName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#312651",
  },
  jobType: {
    fontSize: 12 + 2,
    color: "#83829A",
    marginTop: 3,
    textTransform: "capitalize",
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

export default DepartmentCard;
