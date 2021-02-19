import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignInPass, SignUp} from 'screens';

const Stack = createStackNavigator();

const LoginNavigation = () => {
  function loginNavigator() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="SignInPass"
          component={SignInPass}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Sign Up',
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
