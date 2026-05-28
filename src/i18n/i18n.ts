/**
 * Configuración e inicialización de i18next para JT Consulting.
 * Idioma por defecto: inglés. Fallback: inglés.
 * @module i18n/i18n
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { es, en } from "./translations";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
