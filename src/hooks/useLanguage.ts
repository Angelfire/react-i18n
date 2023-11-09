import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { IReturnUseLanguage } from "@/hooks/Interfaces";

export const useLanguage = (): IReturnUseLanguage | never => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
