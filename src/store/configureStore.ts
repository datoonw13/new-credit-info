import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {authReducer, mainReducer} from './ducks';
import {RESET_STORE} from './ducks/mainDuck';

export const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
  mainReducer,
  authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = {
      mainReducer: {
        isLoading: false,
        isSignedIn: false,
      },
    };
  }
  return appReducer(state, action);
};

export default function configureStore(preloadedState: any) {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const composedEnhancers = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./ducks', () => store.replaceReducer(rootReducer));
  }

  return store;
}
