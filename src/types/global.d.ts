import {Store} from 'redux';
import {NavigationContainerRef} from '@react-navigation/native';
import DropdownAlert from 'react-native-dropdownalert';
import {Loader} from 'components';

type References = {
  navigator: NavigationContainerRef | null;
  loader: Loader | null;
  dropdownAlert: DropdownAlert | null;
  reduxStore: Store<any, any> | null;
};
