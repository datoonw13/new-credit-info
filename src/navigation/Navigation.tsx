import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  UpdatePersonalData,
  CompanyManagement,
  DrawerBeforeAuth,
  DrawerAfterAuth,
  ForgotPassword,
  SetFingerprint,
  SetPasscode,
  SignInPass,
  Dashboard,
  Simulator,
  Payments,
  Register,
  Security,
  Credits,
  Privacy,
  Service,
  Auth,
  FAQ,
  Test,
} from 'screens';
import {BottomTabs} from 'components';
import {
  afterAuthScreenOptions,
  authStackScreenOptions,
  drawerBeforeAuthStyle,
  drawerAfterAuthStyle,
} from './config';
import {saveReference} from 'utils/navigation';
import {selectAuth} from 'store/select';
import {goToSignInWithFingerprint} from './helpers';
import {getCredentials} from 'utils/keychain';
import {useDispatch} from 'react-redux';
import {signIn} from 'store/auth/sagaActions';

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
    <AfterAuthMainStack.Screen component={Security} name="Security" />
    <AfterAuthMainStack.Screen component={Privacy} name="Privacy" />
    <AfterAuthMainStack.Screen component={SetPasscode} name="SetPasscode" />
    <AfterAuthMainStack.Screen
      component={SetFingerprint}
      name="SetFingerprint"
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

const Navigation = () => {
  // const {isSignedIn} = useSelector(selectAuth);

  // useEffect(() => {
  //   /**
  //    * Navigate to use passcode screen if
  //    * storage has credentials.
  //    */
  //   !isSignedIn && goToSignInWithFingerprint();
  // }, [isSignedIn]);
  const dispatch = useDispatch();

  dispatch(
    signIn({
      username: '00000000000',
      password: 'atasertigame',
    }),
  );

  return <UpdatePersonalData />;

  // return (
  //   <NavigationContainer ref={saveReference}>
  //     {isSignedIn ? (
  //       <AfterAuthDrawerNavigator />
  //     ) : (
  //       <BeforeAuthDrawerNavigator />
  //     )}
  //   </NavigationContainer>
  // );
};

export default Navigation;
