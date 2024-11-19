// src/i18n.ts
import i18n from 'i18next';  // Make sure i18n is used here only for initialization
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Backend loading
  .use(LanguageDetector) // Language detection
  .use(initReactI18next) // React-i18next setup
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          hello: "Hello",
          goodbye: "Goodbye",
        },
      },
      fr: {
        translation: {
          hello: "Bonjour",
          goodbye: "Au revoir",
        },
      },
      ar: {
        translation: {
          hello: 'مرحباً',
          goodbye: 'وداعاً',
        },
      },
    },
  });

export default i18n;  // You may keep i18n for initialization, but don't import it anywhere else
