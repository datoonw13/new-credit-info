/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore, {sagaMiddleware} from './src/store/configureStore';
import rootSaga from './src/store/sagas';
import storeRegistry from './src/store/storeRegistry';

export const store = configureStore();
storeRegistry.register(store);

sagaMiddleware.run(() => rootSaga());

const root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => root);
