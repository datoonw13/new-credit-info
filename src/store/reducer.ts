import {combineReducers} from 'redux';
import registration from './registration/reducer';
import app from './app/reducer';

const reducer = combineReducers({
  registration,
  app,
});

export default reducer;
