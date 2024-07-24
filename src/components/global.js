import React, { createContext, useState, useContext } from "react";

export const API_ENDPOINT = "https://05e2-1-38-144-60.ngrok-free.app/";

const UserContext = createContext();

export const user_id = null;

// Create a provider component to manage user data
export const UserProvider = ({ children }) => {
  // State to store user data
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState(null);

  // Provide user data and setter function to child components
  return (
    <UserContext.Provider value={{ userData, setUserData,userId,setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user data and setter function
export const useUser = () => useContext(UserContext);
