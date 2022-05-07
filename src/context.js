import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const handleFeaturesOpen = () => {
    setIsFeaturesOpen((prevValue) => !prevValue);
  };

  const handleCompanyOpen = () => {
    setIsCompanyOpen((prevValue) => !prevValue);
  };

  return (
    <AppContext.Provider
      value={{
        isFeaturesOpen,
        isCompanyOpen,
        handleCompanyOpen,
        handleFeaturesOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobablContext = () => {
  return useContext(AppContext);
};
