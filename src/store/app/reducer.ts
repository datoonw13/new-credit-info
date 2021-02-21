import * as actionTypes from './actionTypes';
import initialState from './initialState';

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CHECKED_SIGNED_IN:
      return {
        ...state,
        isLoading: false,
        isSignedIn: action.isSignedIn,
      };
    case actionTypes.DEFAULT:
      return state;
    default:
      return state;
  }
};

export default appReducer;
