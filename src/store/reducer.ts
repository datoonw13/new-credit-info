import {combineReducers} from 'redux';
import registration from './registration/reducer';
import auth from './auth/reducer';

const reducer = combineReducers({
  registration,
  auth,
});

export default reducer;
