import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserData } from '../api/User/getUserData';
import { accessToken } from '../Fetch/settings';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (accessToken) {
      getUserData(setData);
    }
  }, [accessToken]);

  return (
    <DataContext.Provider value={{ data}}>
      {children}
    </DataContext.Provider>
  );
};


export const useData = () => {
  return useContext(DataContext);
};