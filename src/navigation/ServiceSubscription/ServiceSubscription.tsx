/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {SubscribeService} from 'screens';
import {options} from './config';

const ServiceSubscriptionStack = createNativeStackNavigator();

const ServiceSubscriptionNavigator = () => (
  <ServiceSubscriptionStack.Navigator screenOptions={options}>
    <ServiceSubscriptionStack.Screen name="SubscribeService" component={SubscribeService} />
  </ServiceSubscriptionStack.Navigator>
);

export default ServiceSubscriptionNavigator;
