import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AdminHome from "./src/components/Admin/AdminHome";
import UserHome from "./src/components/User/UserHome";
import Login from "./src/components/Login";
import UserProfile from "./src/components/User/UserProfile";
import SevaDetails from "./src/components/User/SevaDetails";
import Addseva from "./src/components/Admin/Addseva";
import SevaNotificationCard from "./src/components/User/SevaNotificationCard";
import SevaInfoAdd from "./src/components/Admin/SevaInfoAdd";
import AddButton from "./src/components/Admin/AddButton";
import { UserProvider } from "./src/components/global";
import { NavigationContainer } from "@react-navigation/native";
import SevaCardOngoing from "./src/components/User/SevaCardOngoing";
import SevaCardCompleted from "./src/components/User/SevaCardCompleted";
// import SevaDetails from "./src/components/User/SevaDetails";
import Dashboard from "./src/components/Admin/Dashboard";
import AdminSevaDetails from "./src/components/Admin/AdminSevaDetails";
import LiveButton from "./src/components/Admin/LiveButton";
import MultipleUserSelect from "./src/components/Admin/MultipleUserSelect";
function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <UserHome/>
      </NavigationContainer>
    </UserProvider>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;

