import React from 'react';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
import {I18nManager} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { setDateLocale } from './dateService';

const translationGetters = {
  ka: () => require('../assets/i18n/ka.json'),
  en: () => require('../assets/i18n/en.json'),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'ka', isRTL: false};

  // const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;
  const {languageTag, isRTL} = fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
  AsyncStorage.setItem('lang', languageTag);
  setDateLocale();
};
