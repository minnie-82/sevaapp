
import React, { createContext, useState, useContext } from 'react';

export const API_ENDPOINT = "https://8695-42-108-74-161.ngrok-free.app/";




const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
