import * as actionTypes from './actionTypes';
import initialState from './initialState';

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CHECK_SIGNED_IN:
      return {
        ...state,
        isLoading: false,
        isSignedIn: action.isSignedIn,
      };
    case actionTypes.DEFAULT:
      return state;
    case actionTypes.RESET_STORE:
      return {
        ...initialState,
        isLoading: false,
        isSignedIn: false,
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
