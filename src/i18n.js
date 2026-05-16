import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json";
import fa from "./locales/fa/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: {
            translation: en
        },
        fa: {
            translation: fa
        }
    },

    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    },

    detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"]
    }
  })

  function changeDirection(lng) {
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  }

  changeDirection(i18n.language);

  i18n.on("languageChanged", (lng) => {
    changeDirection(lng);
  })

export default i18n;