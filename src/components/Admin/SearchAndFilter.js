import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // or any other icon library you prefer
import ModalDropdown from "react-native-modal-dropdown";

const SearchAndFilter = ({ onSearch, onFilter }) => {
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleFilter = () => {
    onFilter(filterText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={handleSearch}>
        <MaterialIcons name="search" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        {/* <MaterialIcons name="filter-list" size={24} color="black" /> */}
        <ModalDropdown
          options={[
            "By Start Date",
            "By Start-End Date",
            "By Department",
            "By Specific User",
          ]}
          style={styles.dropdownButton}
          dropdownStyle={styles.dropdown}
          dropdownTextStyle={styles.dropdownText}
          onSelect={(index, value) => {
            if (index === 0) {
              // Handle filtering by date range (start date)
            } else if (index === 1) {
              // Handle filtering by date range (start & end date)
            } else if (index === 2) {
              // Handle filtering by department
            } else if (index === 3) {
              // Handle filtering for specific user
            }
          }}
        >
          <MaterialIcons name="filter-list" size={24} color="black" />
        </ModalDropdown>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    margin: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
  },
  dropdownButton: {
    padding: 10,
  },
  dropdown: {
    marginTop: 10,
    marginLeft: -10,
    width: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",

  },
  dropdownText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default SearchAndFilter;
