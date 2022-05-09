import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFeaturesOpen = () => {
    setIsFeaturesOpen((prevValue) => !prevValue);
  };

  const handleCompanyOpen = () => {
    setIsCompanyOpen((prevValue) => !prevValue);
  };

  const handleSidebarOpen = () => {
    setIsSidebarOpen((prevValue) => !prevValue);
  };

  return (
    <AppContext.Provider
      value={{
        isFeaturesOpen,
        isCompanyOpen,
        isSidebarOpen,
        handleCompanyOpen,
        handleFeaturesOpen,
        handleSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobablContext = () => {
  return useContext(AppContext);
};
