// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "moveShape": "Move Shape",
      "movePosition": "Move Position"
    }
  },
  th: {
    translation: {
      "moveShape": "ย้ายรูปทรง",
      "movePosition": "ย้ายตำแหน่ง"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
