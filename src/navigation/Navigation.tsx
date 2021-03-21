import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
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
import {selectAuth} from 'store/select';
import {getCredentials} from 'utils/keychain';

const BeforeAuthMainStack = createNativeStackNavigator();
const BeforeAuthDrawerNav = createDrawerNavigator();

const MainStackNavigator = () => {
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
    drawerContent={() => <Drawer />}
    screenOptions={drawerNavigatorScreenOptions}
    drawerStyle={drawerStyle}>
    <BeforeAuthDrawerNav.Screen
      component={MainStackNavigator}
      name="MainStackNavigator"
    />
  </BeforeAuthDrawerNav.Navigator>
);

const Navigation = () => {
  /**
   * Only for development purposes.
   */
  // useEffect(() => {
  //   goTo('MainStackNavigator', 'Service');
  // }, []);

  /**
   * Navigate to use passcode screen if
   * storage has credentials.
   */
  const {isSignedIn} = useSelector(selectAuth);

  useEffect(() => {
    const signInWithFingerprint = async () => {
      try {
        const credentials = await getCredentials();
        console.log(credentials);
        if (credentials) {
          goTo('MainStackNavigator', 'SignInPass');
        }
      } catch (e) {}
    };

    signInWithFingerprint();
  }, []);

  return isSignedIn ? (
    <Test />
  ) : (
    <NavigationContainer ref={saveReference}>
      <BeforeAuthDrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
