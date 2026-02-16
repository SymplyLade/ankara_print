import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import yoTranslations from './locales/yo.json';
import haTranslations from './locales/ha.json';
import igTranslations from './locales/ig.json';
import pidTranslations from './locales/pid.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      yo: { translation: yoTranslations },
      ha: { translation: haTranslations },
      ig: { translation: igTranslations },
      pid: { translation: pidTranslations },
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
