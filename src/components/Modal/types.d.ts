import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ModalProps as RNModalProps} from 'react-native-modal';

type ModalProps = {
  children?: ReactNode;
  isVisible?: boolean;
  closeOnBackDropPress?: boolean;
  style?: StyleProp<ViewStyle>;
};

type ModalState = {
  visible: boolean;
  element: ReactNode;
  props?: Partial<RNModalProps>;
  style: StyleProp<ViewStyle>;
};
