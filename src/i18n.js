import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "./lang/en.json";
import translationTH from "./lang/th.json";
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    lng: 'th',
    debug: true,
    resources : {
        en: {
            translation: translationEN
        },
        th: {
            translation: translationTH
        }
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;