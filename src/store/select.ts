import {ApplicationState} from 'store/types';

/**
 * Select Registration from state.
 */
export const selectRegistration = ({registration}: ApplicationState) =>
  registration;

/**
 * Select app from state.
 */
export const selectApp = ({app}: ApplicationState) => app;
