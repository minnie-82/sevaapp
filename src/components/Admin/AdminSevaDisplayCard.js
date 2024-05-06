import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AdminSevaDetails from "./AdminSevaDetails";
const AdminSevaDisplayCard = () => {
  const navigation = useNavigation();

  const handleEdit = (department, datecome, timecome, details, instruction) => {
    navigation.navigate("EditSevaDetails", {
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
  // return (

  //   <View>
  //     <View style={styles.cardContainerN}>
  //       <View style={styles.titleContainer}>
  //         <Text style={styles.title} onPress={sevaDetailsPage}>Nilkanth Mandapam</Text>
  //       </View>

  //       <View style={styles.contentContainer}>
  //         <View style={styles.iconTextContainer}>
  //           <FontAwesome name="calendar" size={15} color={"#808080"} />
  //           <Text style={styles.dateText}>Nilkanth Mandapam</Text>
  //           {/* <TouchableOpacity
  //             style={{
  //               height: 30,
  //               // backgroundColor: "#003e6d",
  //               flex: 1,

  //               alignItems: "center",
  //               justifyContent: "flex-end",
  //               gap: 5,
  //               flexDirection: "row",
  //               borderRadius: 30,
  //             }}
  //             onPress={handleEditFirstCard}
  //           >
  //             <FontAwesome
  //               name="edit"
  //               size={15}
  //               color={"#808080"}
  //               style={{ paddingLeft: 0 }}
  //             />
  //             <Text
  //               style={{
  //                 fontSize: 15,
  //                 color: "white",
  //                 flex: 0,
  //                 color: "#808080",
  //                 justifyContent: "space-evenly",
  //               }}
  //             >
  //               Edit
  //             </Text>
  //           </TouchableOpacity> */}
  //         </View>
  //       </View>
  //     </View>
  //     <View style={styles.cardContainerC}>
  //       <View style={styles.titleContainer}>
  //         <Text style={styles.title}>Cleanliness</Text>
  //       </View>

  //       <View style={styles.contentContainer}>
  //         <View style={styles.iconTextContainer}>
  //           <FontAwesome name="calendar" size={15} color={"#808080"} />
  //           <Text style={styles.dateText}>25 Febuary, 2024</Text>
  //           {/* <TouchableOpacity
  //             style={{
  //               height: 30,
  //               // backgroundColor: "#003e6d",
  //               flex: 1,

  //               alignItems: "center",
  //               justifyContent: "flex-end",
  //               gap: 5,
  //               flexDirection: "row",
  //               borderRadius: 30,
  //             }}
  //             onPress={handleEditSecondCard}
  //           >
  //             <FontAwesome
  //               name="edit"
  //               size={15}
  //               color={"#808080"}
  //               style={{ paddingLeft: 0 }}
  //             />
  //             <Text
  //               style={{
  //                 fontSize: 15,
  //                 color: "white",
  //                 flex: 0,
  //                 color: "#808080",
  //                 justifyContent: "space-evenly",
  //               }}
  //             >
  //               Edit
  //             </Text>
  //           </TouchableOpacity> */}
  //         </View>
  //       </View>
  //     </View>

  //     {/* Medical */}
  //     <View style={styles.cardContainerM}>
  //       <View style={styles.titleContainer}>
  //         <Text style={styles.title}>Medical Department</Text>
  //       </View>

  //       <View style={styles.contentContainer}>
  //         <View style={styles.iconTextContainer}>
  //           <FontAwesome name="calendar" size={15} color={"#808080"} />
  //           <Text style={styles.dateText}>25 Febuary, 2024</Text>
  //           {/* <TouchableOpacity
  //             onPress={handleEditThirdCard}
  //             style={{
  //               height: 30,
  //               // backgroundColor: "#003e6d",
  //               flex: 1,

  //               alignItems: "center",
  //               justifyContent: "flex-end",
  //               gap: 5,
  //               flexDirection: "row",
  //               borderRadius: 30,
  //             }}
  //           >
  //             <FontAwesome
  //               name="edit"
  //               size={15}
  //               color={"#808080"}
  //               style={{ paddingLeft: 0 }}
  //             />
  //             <Text
  //               style={{
  //                 fontSize: 15,
  //                 color: "white",
  //                 flex: 0,
  //                 color: "#808080",
  //                 justifyContent: "space-evenly",
  //               }}
  //             >
  //               Edit
  //             </Text>
  //           </TouchableOpacity> */}
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );
  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
      {/* cardContainerN */}
      <TouchableOpacity style={styles.cardContainerN} onPress={sevaDetailsPage}>
        <TouchableOpacity style={styles.logoContainer}>
          {/* <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        /> */}
          <Image
            source={require("../../../assets/nilkanth-pic.jpeg")}
            style={styles.logImage}
          ></Image>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>Nilkanth Mandapam</Text>

          <Text style={styles.jobType}><FontAwesome name="calendar" size={14} color={"#83829A"} />  25 Febuary, 2024</Text>
        </View>
      </TouchableOpacity>
{/* cardContainerC */}
      <TouchableOpacity style={styles.cardContainerC} onPress={sevaDetailsPage}>
        <TouchableOpacity style={styles.logoContainer}>
          {/* <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        /> */}
          <Image
            source={require("../../../assets/nilkanth-pic.jpeg")}
            style={styles.logImage}
          ></Image>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>Cleanliness Department</Text>

          <Text style={styles.jobType}><FontAwesome name="calendar" size={14} color={"#83829A"} />  25 Febuary, 2024</Text>
        </View>
      </TouchableOpacity>

{/* cardContainerM */}
      <TouchableOpacity style={styles.cardContainerM} onPress={sevaDetailsPage}>
        <TouchableOpacity style={styles.logoContainer}>
          {/* <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        /> */}
          <Image
            source={require("../../../assets/nilkanth-pic.jpeg")}
            style={styles.logImage}
          ></Image>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>Medical Department</Text>

          <Text style={styles.jobType}><FontAwesome name="calendar" size={14} color={"#83829A"} />  25 Febuary, 2024</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainerN: {
    flex: 1,
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
    flex: 1,
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
    flex: 1,
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
    marginBottom:10,
    backgroundColor: "#87ceeb",
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
  container: {
    flex: 1,
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
    borderRadius:100
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  jobName: {
    fontSize: 16,
    fontWeight:"bold",
    color: "#312651",
  },
  jobType: {
    fontSize: 12 + 2,
    color: "#83829A",
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default AdminSevaDisplayCard;
