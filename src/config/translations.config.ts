import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import customEnglishMessages from '@/translations/en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { en: customEnglishMessages },
    lng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export const t = i18n.t.bind(i18n);

export default i18n;
