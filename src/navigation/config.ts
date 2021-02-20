import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {StyleProp, ViewStyle} from 'react-native';
import {NativeStackNavigationOptions} from 'react-native-screens/lib/typescript';
import {config} from 'utils';

export const authStackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
  headerShown: false,
};

export const drawerStyle: StyleProp<ViewStyle> = {
  width: config.mobileWidth * 0.8,
};
