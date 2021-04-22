import {ApplicationState} from 'store/types';

/**
 * Select Registration from state.
 */
export const selectRegistration = ({registration}: ApplicationState) =>
  registration;

/**
 * Select app from state.
 */
export const selectAuth = ({auth}: ApplicationState) => auth;

/**
 * Select user.
 */
export const selectUser = ({auth}: ApplicationState) => auth.user;
