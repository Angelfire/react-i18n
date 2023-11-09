export type languagesTypes = "en" | "es";

export interface IChangeLanguageResponse {
  length: number;
  name: string;
  arguments: Array<unknown>;
  caller: Array<unknown>;
}

export type ChangeLanguageFunction = (newLanguage: "en" | "es") => void;

export interface IReturnChangeLanguageFunction {
 changeLanguage: ChangeLanguageFunction;
 language: languagesTypes;
 t: (key: string) => string;
}