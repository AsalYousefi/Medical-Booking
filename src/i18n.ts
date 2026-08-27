import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enHeader from "./locales/en/header.json";
import enAbout from "./locales/en/about.json";
import enTestimonials from "./locales/en/testimonials.json";
import enTimeline from "./locales/en/timeline.json";
import enHome from "./locales/en/home.json";
import enFooter from "./locales/en/footer.json";
import enBooking from "./locales/en/booking.json";

import faHeader from "./locales/fa/header.json";
import faAbout from "./locales/fa/about.json";
import faTestimonials from "./locales/fa/testimonials.json";
import faTimeline from "./locales/fa/timeline.json";
import faHome from "./locales/fa/home.json";
import faFooter from "./locales/fa/footer.json";
import faBooking from "./locales/fa/booking.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: enHeader,
          home: enHome,
          about: enAbout,
          testimonials: enTestimonials,
          timeline: enTimeline,
          booking: enBooking,
          footer: enFooter,
        },
      },
      fa: {
        translation: {
          header: faHeader,
          home: faHome,
          about: faAbout,
          testimonials: faTestimonials,
          timeline: faTimeline,
          booking: faBooking,
          footer: faFooter,
        },
      },
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

function changeDirection(lng: string) {
  document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
}

changeDirection(i18n.language);

i18n.on("languageChanged", (lng) => {
  changeDirection(lng);
});

export default i18n;
