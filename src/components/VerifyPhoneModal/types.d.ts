import {TFunction} from 'i18next';

type VerifyPhoneModalProps = {
  t: TFunction;
};

type VerifyPhoneModalState = {
  visible: boolean;
  code: string;
};
