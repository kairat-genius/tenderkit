import React, { createContext, useContext, useEffect, useState } from 'react';
import  { getUserData }  from '../api/User/getUserData';
import { refreshToken } from '../Fetch/settings';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (refreshToken) {
      getUserData(setData);
    }
  }, [refreshToken]);

  return (
    <DataContext.Provider value={{ data}}>
      {children}
    </DataContext.Provider>
  );
};


export const useData = () => {
  return useContext(DataContext);
};