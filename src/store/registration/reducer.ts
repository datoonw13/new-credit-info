import initialState from './initialState';
import * as actionTypes from './actionTypes';

const registrationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case actionTypes.SET_REGISTER_SELECTED_STEP:
      return {
        ...state,
        registerSelectedStep: action.step,
      };
    case actionTypes.SET_REGISTER_LAST_STEP:
      return {
        ...state,
        registerLastStep: action.step,
      };
    case actionTypes.SET_REGISTER_DATA:
      return {
        ...state,
        registerData: action.data,
      };
    case actionTypes.RESET_REGISTER_DATA:
      return {
        ...state,
        registerSelectedStep: 1,
        registerLastStep: 1,
        registerData: {},
      };
    case actionTypes.UPDATE_REGISTER_DATA:
      return {
        ...state,
        registerData: {...state.registerData, ...action.data},
      };
    case actionTypes.SET_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      };
    default:
      return state;
  }
};

export default registrationReducer;
