import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import ka from './ka';

const i18nextConfig = i18next.use(initReactI18next).init({
  resources: {
    en: en,
    ka: ka,
  },
  lng: 'ka',
  fallbackLng: 'ka',
  interpolation: {
    escapeValue: false,
  },
  nsSeparator: false,
});

export default i18nextConfig;
