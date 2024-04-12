
import React, { createContext, useState, useContext } from 'react';

export const API_ENDPOINT = " https://435d-110-226-181-97.ngrok-free.app/";




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
