import { createContext, useState, ReactNode } from "react";
import React from "react";
import { ILanguage } from "../types/ITypes";

export type LanguageContextType = {
  lang: keyof ILanguage;
  changeLanguage: (value: keyof ILanguage) => void;
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
  const ws_l = localStorage.getItem("ws_l") as keyof ILanguage;
  const [lang, setLang] = useState<keyof ILanguage>(ws_l || "uz");
  const changeLanguage = (value: keyof ILanguage) => {
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
