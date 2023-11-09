import { createContext, useEffect, useState, ReactNode } from "react";
import { SUPPORTED_LANGUAGES } from "@/locales/constants";
import enTranslations from "@/locales/lang/en.json";
import esTranslations from "@/locales/lang/es.json";

interface ITranslations {
  [key: string]: { [key: string]: string };
}

type Language = (typeof SUPPORTED_LANGUAGES)[number];

interface LanguageContextType {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const defaultLanguage = "en";
  const storedLanguage = localStorage.getItem("language");
  const browserLanguage =
    navigator.language.substring(0, 2) ||
    navigator.userLanguage.substring(0, 2);
  const preferredLanguage = storedLanguage || browserLanguage;

  const initialLanguage = SUPPORTED_LANGUAGES.includes(
    preferredLanguage as Language
  )
    ? (preferredLanguage as Language)
    : (defaultLanguage as Language);

  const [language, setLanguage] = useState<Language>(initialLanguage);

  const translations: ITranslations =
    language === "en" ? enTranslations : esTranslations;

  useEffect(() => {
    localStorage.setItem("language", language);

    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    if (SUPPORTED_LANGUAGES.includes(newLanguage)) {
      setLanguage(newLanguage);
    }
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let translation = translations;

    for (const k of keys) {
      if (translation && k in translation) {
        translation = translation[k];
      } else {
        return key;
      }
    }

    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
