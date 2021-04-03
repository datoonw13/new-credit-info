import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';

const useErrorMessage = (errors: ErrorMessages) => {
  const {t} = useTranslation();

  const userNameErrorMsg = useCallback(
    (isPerson: boolean) => {
      if (errors.userName) {
        return t(
          isPerson
            ? 'registration.validPersonalNumber'
            : 'registration.validIdentificationCode',
        );
      }
    },
    [errors.userName, t],
  );

  const firstNameErrorMsg = useCallback(
    (isPerson: boolean) => {
      if (errors.firstName) {
        return t(
          isPerson ? 'registration.validFirstName' : 'registration.validName',
        );
      }
    },
    [errors.firstName, t],
  );

  const lastNameErrorMsg = useCallback(() => {
    if (errors.lastName) {
      return t('registration.validLastName');
    }
  }, [errors.lastName, t]);

  const birthDateErrorMsg = useCallback(
    (isPerson: boolean) => {
      if (errors.birthDate) {
        return t(
          isPerson
            ? 'registration.validBirthDate'
            : 'registration.validDateOfFoundation',
        );
      }
    },
    [errors.birthDate, t],
  );

  const phoneErrorMsg = useCallback(() => {
    if (errors.phone) {
      return t('registration.validPhone');
    }
  }, [errors.phone, t]);

  const countryErrorMsg = useCallback(() => {
    if (errors.country) {
      return t('registration.validCountry');
    }
  }, [errors.country, t]);

  const addressErrorMsg = useCallback(() => {
    if (errors.address) {
      return t('registration.validAddress');
    }
  }, [errors.address, t]);

  const emailErrorMsg = useCallback(() => {
    if (errors.email) {
      return t('registration.validEmail');
    }
  }, [errors.email, t]);

  return {
    userNameErrorMsg,
    firstNameErrorMsg,
    lastNameErrorMsg,
    birthDateErrorMsg,
    phoneErrorMsg,
    countryErrorMsg,
    addressErrorMsg,
    emailErrorMsg,
  };
};

export default useErrorMessage;

type ErrorMessages = {
  firstName?: any;
  userName?: any;
  lastName?: any;
  birthDate?: any;
  phone?: any;
  country?: any;
  address?: any;
  email?: any;
};
