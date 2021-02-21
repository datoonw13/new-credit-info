import {combineReducers} from 'redux';
import registrationReducer from './registration/reducer';
import appReducer from './app/reducer';

const reducer = combineReducers({
  registrationReducer,
  appReducer,
});

export default reducer;
