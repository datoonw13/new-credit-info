import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerBeforeAuth,
  ForgotPassword,
  SignInPass,
  Register,
  Privacy,
  Service,
  Auth,
  FAQ,
  Test,
} from 'screens';
import {authStackScreenOptions, drawerBeforeAuthStyle} from './config';

/**
 * Before auth navigation components.
 */
const BeforeAuthMainStack = createNativeStackNavigator();
const BeforeAuthDrawerNav = createDrawerNavigator();

const MainStackBeforeAuthNavigator = () => {
  return (
    <BeforeAuthMainStack.Navigator
      initialRouteName="Auth"
      screenOptions={authStackScreenOptions}>
      <BeforeAuthMainStack.Screen component={Test} name="Test" />
      <BeforeAuthMainStack.Screen component={SignInPass} name="SignInPass" />
      <BeforeAuthMainStack.Screen component={Auth} name="Auth" />
      <BeforeAuthMainStack.Screen
        component={ForgotPassword}
        name="ForgotPassword"
      />
      <BeforeAuthMainStack.Screen component={Privacy} name="Privacy" />
      <BeforeAuthMainStack.Screen component={FAQ} name="FAQ" />
      <BeforeAuthMainStack.Screen component={Service} name="Service" />
      <BeforeAuthMainStack.Screen component={Register} name="Register" />
    </BeforeAuthMainStack.Navigator>
  );
};

const BeforeAuthDrawerNavigator = () => (
  <BeforeAuthDrawerNav.Navigator
    drawerContent={() => <DrawerBeforeAuth />}
    drawerStyle={drawerBeforeAuthStyle}>
    <BeforeAuthDrawerNav.Screen
      component={MainStackBeforeAuthNavigator}
      name="MainStackBeforeAuthNavigator"
    />
  </BeforeAuthDrawerNav.Navigator>
);

export default BeforeAuthDrawerNavigator;
