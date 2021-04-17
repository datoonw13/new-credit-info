import {AppMode, AppState} from 'store/types';
import * as actionTypes from './actionTypes';
import initialState from './initialState';

const appReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_APP_AUTHORIZATION_MODE:
      const mode: AppMode = action.payload;
      return {
        ...state,
        mode,
      };
    default:
      return state;
  }
};

export default appReducer;
