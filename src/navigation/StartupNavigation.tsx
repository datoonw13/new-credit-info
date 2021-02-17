import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Ping} from 'screens';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';
import {useSelector} from 'react-redux';
import navigationService from 'services/navigationService';
import {WHITE} from 'theme/colors';

const Stack = createStackNavigator();

const StartupNavigation = () => {
  const {isLoading, isSignedIn} = useSelector((state) => state.mainReducer);

  return (
    <NavigationContainer
      theme={{colors: {background: WHITE}}}
      ref={(navigatorRef) =>
        navigationService.setTopLevelNavigator(navigatorRef)
      }>
      {isLoading ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Ping" component={Ping} />
        </Stack.Navigator>
      ) : isSignedIn ? (
        <MainNavigation />
      ) : (
        <LoginNavigation />
      )}
    </NavigationContainer>
  );
};

export default StartupNavigation;
