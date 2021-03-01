import {StyleProp, ViewStyle} from 'react-native';
import {Store} from 'redux';
import {ModalProps} from 'react-native-modal';
import {NavigationContainerRef} from '@react-navigation/native';
import DropdownAlert from 'react-native-dropdownalert';
import {Loader, Modal} from 'components';

type References = {
  navigator: NavigationContainerRef | null;
  dropdownAlert: DropdownAlert | null;
  reduxStore: Store<any, any> | null;
  loader: Loader | null;
  modal: Modal | null;
};

type ConfigureModalProps = {
  element: JSX.Element | JSX.Element[];
  props?: Partial<ModalProps>;
  style: StyleProp<ViewStyle>;
};

type ConfigureModal = (props: ConfigureModalProps) => void;
