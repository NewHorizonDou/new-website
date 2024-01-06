import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "he" | "en";

interface LanguageContextProps {
  language: Language;
  switchLanguage: (newLanguage: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.body.style.direction = language === "en" ? "ltr" : "rtl";
  }, [language]);

  const switchLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return <LanguageContext.Provider value={{ language, switchLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
