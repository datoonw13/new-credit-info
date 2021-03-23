import {StyleProp, ViewStyle} from 'react-native';
import {NativeStackNavigationOptions} from 'react-native-screens/lib/typescript';
import {config} from 'utils';

export const authStackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const afterAuthScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const drawerBeforeAuthStyle: StyleProp<ViewStyle> = {
  width: config.mobileWidth * 0.8,
};

export const drawerAfterAuthStyle: StyleProp<ViewStyle> = {
  width: config.mobileWidth * 0.8,
};
