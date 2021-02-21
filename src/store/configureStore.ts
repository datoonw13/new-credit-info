import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'store/reducer';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState: any = undefined) => {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const composedEnhancers = composeEnhancers(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./ducks', () => store.replaceReducer(reducer));
  // }

  return store;
};

const store = configureStore();

sagaMiddleware.run(() => rootSaga());

export default store;
