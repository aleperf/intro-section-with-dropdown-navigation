import React, { useState, useContext } from 'react';
import iconCalendar from './images/icon-calendar.svg';
import iconTodo from './images/icon-todo.svg';
import iconReminders from './images/icon-reminders.svg';
import iconPlanning from './images/icon-planning.svg';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const companyItems = [
    { name: 'History' },
    { name: 'Our Team' },
    { name: 'Blog' },
  ];

  const featuresItems = [
    { name: 'Todo List', icon: iconTodo },
    { name: 'Calendar', icon: iconCalendar },
    { name: 'Remainders', icon: iconReminders },
    { name: 'Planning', icon: iconPlanning },
  ];


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
        featuresItems,
        companyItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobablContext = () => {
  return useContext(AppContext);
};
