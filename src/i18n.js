import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';
import translationIT from './locales/it.json';
import translationPT from './locales/pt.json';
import translationRU from './locales/ru.json';
import translationZH from './locales/zh.json';
import translationAR from './locales/ar.json';
import translationJA from './locales/ja.json';
import translationKO from './locales/ko.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: translationFR
      },
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      },
      it: {
        translation: translationIT
      },
      pt: {
        translation: translationPT
      },
      ru: {
        translation: translationRU
      },
      zh: {
        translation: translationZH
      },
      ar: {
        translation: translationAR
      },
      ja: {
        translation: translationJA
      },
      ko: {
        translation: translationKO
      }
    },
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
