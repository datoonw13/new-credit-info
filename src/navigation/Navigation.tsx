import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  ForgotPassword,
  SignInPass,
  Register,
  Privacy,
  Service,
  Drawer,
  Auth,
  FAQ,
  Test,
} from 'screens';
import {
  drawerNavigatorScreenOptions,
  authStackScreenOptions,
  drawerStyle,
} from './config';
import {saveReference, goTo} from 'utils/navigation';

const MainStack = createNativeStackNavigator();
const DrawerNav = createDrawerNavigator();

const MainStackNavigator = () => (
  <MainStack.Navigator
    initialRouteName="ForgotPassword"
    screenOptions={authStackScreenOptions}>
    <MainStack.Screen component={Test} name="Test" />
    <MainStack.Screen component={SignInPass} name="SignInPass" />
    <MainStack.Screen component={Auth} name="Auth" />
    <MainStack.Screen component={ForgotPassword} name="ForgotPassword" />
    <MainStack.Screen component={Privacy} name="Privacy" />
    <MainStack.Screen component={FAQ} name="FAQ" />
    <MainStack.Screen component={Service} name="Service" />
    <MainStack.Screen component={Register} name="Register" />
  </MainStack.Navigator>
);

const DrawerNavigator = () => (
  <DrawerNav.Navigator
    drawerContent={() => <Drawer />}
    screenOptions={drawerNavigatorScreenOptions}
    drawerStyle={drawerStyle}>
    <DrawerNav.Screen
      component={MainStackNavigator}
      name="MainStackNavigator"
    />
  </DrawerNav.Navigator>
);

const Navigation = () => {
  /**
   * Only for development purposes.
   */
  // useEffect(() => {
  //   goTo('MainStackNavigator', 'Service');
  // }, []);

  return (
    <NavigationContainer ref={saveReference}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
