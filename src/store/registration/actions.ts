import * as actionTypes from './actionTypes';

/**
 * Save user data.
 */
export const setUserDataAction = (userData: any) => ({
  type: actionTypes.SET_USER_DATA,
  userData,
});

/**
 * Save current step.
 */
export const setRegisterSelectedStepAction = (step: number) => ({
  type: actionTypes.SET_REGISTER_SELECTED_STEP,
  step,
});

/**
 * Save the step the furthest step user has gone.
 */
export const setRegisterLastStepAction = (step: number) => ({
  type: actionTypes.SET_REGISTER_LAST_STEP,
  step,
});

/**
 * Save the date user inputs during
 * the registration process.
 */
export const setRegisterDataAction = (data: any) => ({
  type: actionTypes.SET_REGISTER_DATA,
  data,
});

/**
 * Reset the data user has input
 * during the registration process.
 */
export const resetRegisterDataAction = () => ({
  type: actionTypes.RESET_REGISTER_DATA,
});

/**
 * Update data user inputs during
 * the registration process.
 */
export const updateRegisterDataAction = (data: any) => ({
  type: actionTypes.UPDATE_REGISTER_DATA,
  data,
});

/**
 * Save countries into state.
 */
export const setCountriesAction = (countries: any) => ({
  type: actionTypes.SET_COUNTRIES,
  countries,
});
