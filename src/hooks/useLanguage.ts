import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { IReturnChangeLanguageFunction } from "@/hooks/Interfaces";

export const useLanguage = (): IReturnChangeLanguageFunction => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
