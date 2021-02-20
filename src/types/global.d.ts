import {Loader} from 'components';
import {NavigationContainerRef} from '@react-navigation/native';
import DropdownAlert from 'react-native-dropdownalert';

type References = {
  navigator: NavigationContainerRef | null;
  loader: Loader | null;
  dropdownAlert: DropdownAlert | null;
};
