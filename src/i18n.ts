import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import LocalStorageBackend from 'i18next-localstorage-backend';

i18n
  // Enables the i18next backend
  .use(Backend)
  // Enable automatic language detection
  .use(LanguageDetector)
  // Enables the hook initialization module
  .use (initReactI18next)

  .init({
    fallbackLng: 'en',

    debug: false,

    interpolation: {
      escapeValue: false
    },
    backend: {
      backends: [
        LocalStorageBackend,
        Backend
      ]
    },
    react: { 
      useSuspense: false
    }
  })

export default i18n;