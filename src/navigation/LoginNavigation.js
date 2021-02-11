import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen, SignInScreenPass, SignUpScreen} from '../screens';

const Stack = createStackNavigator();

const loginScreenOptions = (title) => ({
  title,
  headerBackTitleVisible: false,
  headerTitleAlign: 'left',
  headerStyle: {
    // backgroundColor: BACKGROUND,
  },
  // headerTintColor: WHITE,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const LoginNavigation = () => {
  function loginNavigator() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="SignInPass"
          component={SignInScreenPass}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: 'Sign In',
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      <Stack.Screen name="Login" component={loginNavigator} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
