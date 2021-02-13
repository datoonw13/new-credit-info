import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import {I18nManager} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {setDateLocale} from './dateService';

const translationGetters = {
  ka: () => require('../assets/i18n/ka.json'),
  en: () => require('../assets/i18n/en.json'),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  const fallback = {languageTag: 'ka', isRTL: false};
  const {languageTag, isRTL} = fallback;
  translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
  AsyncStorage.setItem('lang', languageTag);
  setDateLocale();
};
