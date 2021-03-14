import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'store/reducer';
import * as sagas from 'store/sagas';

declare var window: any;

/**
 * Create saga middleware.
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Create compose enhancer for redux devtools.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Configure store
 */
const configureStore = () => {
  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
};

const store = configureStore();

/**
 * Register sagas.
 */
sagaMiddleware.run(sagas.registrationSagas);
sagaMiddleware.run(sagas.authSagas);

export default store;
