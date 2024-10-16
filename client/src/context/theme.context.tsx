import React, { createContext, useState, ReactNode, useEffect } from "react";

export type ThemeContextType = {
  isDarkMode: boolean;
  changeDarkMode: (value: boolean) => void;
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  changeDarkMode: () => {},
});

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const changeDarkMode = (value: boolean) => {
    setIsDarkMode(() => {
      localStorage.setItem("darkMode", JSON.stringify(value));
      return value;
    });
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const contextValue: ThemeContextType = {
    isDarkMode,
    changeDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
