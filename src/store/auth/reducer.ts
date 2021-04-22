import {AuthState} from 'store/types';
import * as actionTypes from './actionTypes';
import initialState from './initialState';

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case actionTypes.CHECK_SIGNED_IN:
      return {
        ...state,
        isLoading: false,
        authStatus: action.authStatus,
      };
    case actionTypes.DEFAULT:
      return state;
    case actionTypes.RESET_STORE:
      return {
        ...initialState,
        isLoading: false,
        authStatus: null,
      };
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default authReducer;
