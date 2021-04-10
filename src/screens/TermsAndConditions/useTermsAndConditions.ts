import {useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import * as services from 'services';
import {parseDate} from './helpers';
import {months} from 'utils/localization/date';

const useTermsAndConditions = () => {
  const [userAgreement, setUserAgreement] = useState<string | null>(null);
  const [lastModifyDateString, setLastModifyDateString] = useState<
    string | null
  >(null);

  const {t} = useTranslation();

  /**
   * Get user agreement.
   */
  useEffect(() => {
    const getUserAgreement = async () => {
      try {
        const {content, lastModify} = await services.getUserAgreement();
        setUserAgreement(content);
        setLastModifyDateString(lastModify);
      } catch (e) {
        console.log(e);
      }
    };

    getUserAgreement();
  }, []);

  /**
   * Assemble last modify text.
   */
  const lastModifyText = useMemo(() => {
    if (lastModifyDateString !== null) {
      const lastModifyDate = parseDate(lastModifyDateString);

      const month = lastModifyDate.getMonth();
      const day = lastModifyDate.getDate();
      const year = lastModifyDate.getFullYear();

      const dateRepresentation = `${day} ${months.ka[month]}, ${year}`;

      return `${t('termsAndConditions.lastModify')} - ${dateRepresentation}`;
    }

    return '';
  }, [lastModifyDateString, t]);

  return {
    lastModifyText,
    userAgreement,
  };
};

export default useTermsAndConditions;
