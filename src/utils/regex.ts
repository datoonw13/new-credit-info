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

/**
 * Phone regex.
 */
export const phone = /^5[0-9]{8}$/;

/**
 * Number regex.
 */
export const number = /^\d*$/;
