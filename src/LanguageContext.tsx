import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { translation } from "./translation";

type Language = "de" | "eng" | "pl";

interface NavItem {
  name: string;
  id: string;
}

interface TranslationContent {
  spanText: string;
  fallback: string;
  headerQuestion: string;
  nav: NavItem[];
  mainTitle: string;
  trustUs: {
    headerTrustUs: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  aboutUs: {
    headerAboutUs: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    logoHeader: string;
  };
  services: {
    headerServices: string;
    headerTyreService: string;
    headerTyreSales: string;
    headerCarService: string;
    tyreServiceDesc: string;
    tyreSalesDesc: string;
    carServiceDesc: string;
    showMoreBtn: string;
    hideBtn: string;
  };
  contact: {
    headerContact: string;
    openHoursHeader: string;
    monToFri: string;
    sat: string;
    anyQuestionHeader: string;
    socialMediaHeader: string;
    mapHeader: string;
  };
  createdBy: string;
  call: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: TranslationContent;
}

const defaultLanguage: Language = "de";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("appLanguage") as Language) || defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  const setLanguageHandler = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const translations = translation[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: setLanguageHandler,
        translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
