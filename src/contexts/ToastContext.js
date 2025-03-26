import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from '../components/ui/Toast';

const ToastContext = createContext({
  showToast: () => {},
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'info',
    duration: 3000,
    position: 'bottom-right',
  });

  const showToast = useCallback((message, options = {}) => {
    setToast({
      visible: true,
      message,
      type: options.type || 'info',
      duration: options.duration || 3000,
      position: options.position || 'bottom-right',
    });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        message={toast.message}
        type={toast.type}
        duration={toast.duration}
        isVisible={toast.visible}
        onClose={hideToast}
        position={toast.position}
      />
    </ToastContext.Provider>
  );
};
