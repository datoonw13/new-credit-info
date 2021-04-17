import {combineReducers} from 'redux';
import registration from './registration/reducer';
import auth from './auth/reducer';
import app from './app/reducer';

const reducer = combineReducers({
  registration,
  auth,
  app,
});

export default reducer;
