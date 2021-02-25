import {Store} from 'redux';
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
