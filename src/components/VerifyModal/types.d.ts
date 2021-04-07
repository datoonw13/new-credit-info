import {TFunction} from 'i18next';

type VerifyModalProps = {
  t: TFunction;
  title: string;
  description: string;
  onPress: () => void;
};

type VerifyModalState = {
  visible: boolean;
  code: string;
};
