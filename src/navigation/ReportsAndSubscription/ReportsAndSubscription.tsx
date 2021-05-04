/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {SubscribeService, Reports, DownloadReport, SendReport} from 'screens';
import {options} from './config';

const ReportsAndSubscriptionStack = createNativeStackNavigator();

const ServiceSubscriptionNavigator = () => (
  <ReportsAndSubscriptionStack.Navigator screenOptions={options}>
    <ReportsAndSubscriptionStack.Screen name="Reports" component={Reports} />
    <ReportsAndSubscriptionStack.Screen name="DownloadReport" component={DownloadReport} />
    <ReportsAndSubscriptionStack.Screen name="SendReport" component={SendReport} />
    <ReportsAndSubscriptionStack.Screen name="SubscribeService" component={SubscribeService} />
  </ReportsAndSubscriptionStack.Navigator>
);

export default ServiceSubscriptionNavigator;
