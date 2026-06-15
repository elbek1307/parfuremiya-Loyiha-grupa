import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector) // Brauzer tilini va keshni tekshiradi
  .use(initReactI18next)
  .init({
    lng: "ru", // Dastur ochilganda boshlang'ich til rus tili bo'ladi
    fallbackLng: "en", // Agar biror til topilmasa, inglizcha ishlatiladi

    debug: true,
    backend: {
      // PAPKA NOMIGA E'TIBOR BERING: public ichidagi papka nomi "Locals" (katta harfda) bo'lishi kerak
      loadPath: "/Locals/{{lng}}.json",
    },

    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;