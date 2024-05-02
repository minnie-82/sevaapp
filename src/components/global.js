import React, { createContext, useState, useContext } from "react";

export const API_ENDPOINT = "https://78fd-110-226-176-187.ngrok-free.app/";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [sevaData, setSevaData] = useState(null);
  const updateSevaData = (newSevaData) => {
    setSevaData(newSevaData);
  };

  return (
    <UserContext.Provider
      value={{ userData, setUserData, sevaData, updateSevaData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
