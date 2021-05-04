/* eslint-disable prettier/prettier */
import React, {useMemo} from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  PaymentInstructions,
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
import {useSelector} from 'react-redux';
import {selectAuth} from 'store/select';
import {afterAuthScreenOptions, drawerAfterAuthStyle} from './config';
import ReportsAndSubscriptionNavigator from '../ReportsAndSubscription';

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
    <AfterAuthMainStack.Screen component={CompanyManagement} name="CompanyManagement" />
    <AfterAuthMainStack.Screen component={Payments} name="Payments" />
  </AfterAuthMainStack.Navigator>
);

const BottomTabNavigator = () => (
  <BottomTabNav.Navigator tabBar={() => <BottomTabs />}>
    <BottomTabNav.Screen component={AfterAuthMainStackNavigator} name="AfterAuthMainStackNavigator" />
  </BottomTabNav.Navigator>
);

const AfterAuthDrawerNavigator = () => {
  const {authStatus} = useSelector(selectAuth);
  console.log({authStatus});

  const MainAuthorizedScreen = useMemo(() => {
    if (authStatus === 'SHOULD_PAY') {
      return <AfterAuthDrawerNav.Screen component={PaymentInstructions} name="PaymentInstructions" />;
    } else if (authStatus === 'FULL_ACCESS') {
      return <AfterAuthDrawerNav.Screen component={BottomTabNavigator} name="BottomTabNavigator" />;
    }
    return <AfterAuthDrawerNav.Screen component={ReportsAndSubscriptionNavigator} name="ReportsAndSubscriptionNavigator" />;
  } , [authStatus]);

  return (
    <AfterAuthDrawerNav.Navigator
      drawerStyle={drawerAfterAuthStyle}
      drawerContent={() => <DrawerAfterAuth />}  >
      {MainAuthorizedScreen}
      <AfterAuthDrawerNav.Screen component={FAQ} name="FAQ" />
      <AfterAuthDrawerNav.Screen component={UpdatePersonalData} name="UpdatePersonalData" />
      <AfterAuthDrawerNav.Screen component={Security} name="Security" />
      <AfterAuthDrawerNav.Screen component={ChangePassword} name="ChangePassword" />
      <AfterAuthDrawerNav.Screen component={Privacy} name="Privacy" />
      <AfterAuthDrawerNav.Screen component={SetPasscode} name="SetPasscode" />
      <AfterAuthDrawerNav.Screen component={SetFingerprint} name="SetFingerprint" />
      <AfterAuthDrawerNav.Screen component={TermsAndConditions} name="TermsAndConditions" />
    </AfterAuthDrawerNav.Navigator>
  );
};

export default AfterAuthDrawerNavigator;
