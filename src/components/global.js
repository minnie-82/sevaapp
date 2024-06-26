import React, { createContext, useState, useContext } from "react";

export const API_ENDPOINT = "https://bc57-42-111-103-36.ngrok-free.app/";

const UserContext = createContext();

// Create a provider component to manage user data
export const UserProvider = ({ children }) => {
  // State to store user data
  const [userData, setUserData] = useState(null);

  // Provide user data and setter function to child components
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user data and setter function
export const useUser = () => useContext(UserContext);
