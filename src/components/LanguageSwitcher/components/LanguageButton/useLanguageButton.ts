import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {setLang} from 'utils/global';

const useLanguageButton = (type: string) => {
  const {i18n} = useTranslation();

  /**
   * Change i18n language and also
   * update global lang property.
   */
  const changeLanguage = useCallback(() => {
    const lang = type === 'English' ? 'en' : 'ka';
    setLang(lang);
    i18n.changeLanguage(lang);
  }, [type, i18n]);

  return {
    changeLanguage,
  };
};

export default useLanguageButton;
