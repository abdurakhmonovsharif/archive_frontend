import { createContext, useState, ReactNode } from "react";
import React from "react";

export type LanguageContextType = {
  lang: string;
  changeLanguage: (value: string) => void;
};

interface LanguageContextProviderProps {
  children: ReactNode;
}
export const LanguageContext = createContext<LanguageContextType>({
  lang: "uz",
  changeLanguage: () => {},
});

export const LanguageContextProvider: React.FC<
  LanguageContextProviderProps
> = ({ children }) => {
  const ws_l = localStorage.getItem("ws_l") as string;
  const [lang, setLang] = useState(ws_l || "uz");
  const changeLanguage = (value: string) => {
    setLang(value), localStorage.setItem("ws_l", value);
  };

  const contextValue = {
    lang,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
