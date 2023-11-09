export type languagesTypes = "en" | "es";

export type ChangeLanguageFunction = (newLanguage: "en" | "es") => void;

export interface IReturnUseLanguage {
 changeLanguage: ChangeLanguageFunction;
 language: languagesTypes;
 t: (key: string) => string;
}