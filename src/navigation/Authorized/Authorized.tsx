import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  TermsAndConditions,
  UpdatePersonalData,
  CompanyManagement,
  DrawerAfterAuth,
  ChangePassword,
  SetFingerprint,
  SetPasscode,
  Dashboard,
  Simulator,
  Payments,
  Security,
  Credits,
  Privacy,
  FAQ,
} from 'screens';
import {BottomTabs} from 'components';
import {afterAuthScreenOptions, drawerAfterAuthStyle} from './config';

/**
 * After auth navigation components.
 */
const AfterAuthMainStack = createNativeStackNavigator();
const BottomTabNav = createBottomTabNavigator();
const AfterAuthDrawerNav = createDrawerNavigator();

const AfterAuthMainStackNavigator = () => (
  <AfterAuthMainStack.Navigator screenOptions={afterAuthScreenOptions}>
    <AfterAuthMainStack.Screen component={Dashboard} name="Dashboard" />
    <AfterAuthMainStack.Screen component={Simulator} name="Simulator" />
    <AfterAuthMainStack.Screen component={Credits} name="Credits" />
    <AfterAuthMainStack.Screen
      component={CompanyManagement}
      name="CompanyManagement"
    />
    <AfterAuthMainStack.Screen component={Payments} name="Payments" />
    <AfterAuthMainStack.Screen component={FAQ} name="FAQ" />
    <AfterAuthMainStack.Screen
      component={UpdatePersonalData}
      name="UpdatePersonalData"
    />
    <AfterAuthMainStack.Screen component={Security} name="Security" />
    <AfterAuthMainStack.Screen
      component={ChangePassword}
      name="ChangePassword"
    />
    <AfterAuthMainStack.Screen component={Privacy} name="Privacy" />
    <AfterAuthMainStack.Screen component={SetPasscode} name="SetPasscode" />
    <AfterAuthMainStack.Screen
      component={SetFingerprint}
      name="SetFingerprint"
    />
    <AfterAuthMainStack.Screen
      component={TermsAndConditions}
      name="TermsAndConditions"
    />
  </AfterAuthMainStack.Navigator>
);

const BottomTabNavigator = () => (
  <BottomTabNav.Navigator tabBar={() => <BottomTabs />}>
    <BottomTabNav.Screen
      component={AfterAuthMainStackNavigator}
      name="AfterAuthMainStackNavigator"
    />
  </BottomTabNav.Navigator>
);

const AfterAuthDrawerNavigator = () => (
  <AfterAuthDrawerNav.Navigator
    drawerStyle={drawerAfterAuthStyle}
    drawerContent={() => <DrawerAfterAuth />}>
    <AfterAuthDrawerNav.Screen
      component={BottomTabNavigator}
      name="BottomTabNavigator"
    />
  </AfterAuthDrawerNav.Navigator>
);

export default AfterAuthDrawerNavigator;
