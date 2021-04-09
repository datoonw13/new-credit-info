import {TFunction} from 'i18next';

type VerifyModalProps = {
  t: TFunction;
  title: string;
  description: string;
  onPress: (code: string) => void;
  mode: 'phone' | 'email';
};

type VerifyModalState = {
  visible: boolean;
  code: string;
};
