
import React, { createContext, useState, useContext, useCallback } from 'react';
import Toast from './Toast';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMessage && <Toast message={toastMessage.message} type={toastMessage.type} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
