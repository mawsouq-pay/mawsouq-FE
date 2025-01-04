import ar from "./ar";
import en from "./en";

const translations = {
    ar,
    en,
};
export const textTr = (locale?: string) =>
    locale === "ar" ? translations["ar"] : translations["en"];