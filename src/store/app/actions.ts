import {AppMode} from 'store/types';
import * as actionTypes from './actionTypes';

/**
 * Set authorization mode.
 */
export const setAppMode = (appMode: AppMode) => ({
  type: actionTypes.SET_APP_AUTHORIZATION_MODE,
  payload: appMode,
});
