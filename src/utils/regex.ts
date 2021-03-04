import {global} from 'utils';

/**
 * Username regex.
 */
export const username = /^\d*$/;

/**
 * Firstname regex according to lang.
 */
export const nameField = () =>
  global.lang === 'ka' ? /^[ა-ჰ]*$/ : /^[A-Za-z]*$/;
