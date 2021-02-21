import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from 'App';
import {name as appName} from './app.json';
import store from 'store/configureStore';
import {saveStoreRef} from 'utils/redux';

saveStoreRef(store);

const root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => root);
