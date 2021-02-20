import DropdownAlert, {DropdownAlertType} from 'react-native-dropdownalert';
import localization from 'utils/localization/config';
import references from 'utils/references';

/**
 * Save dropdown alert reference.
 */
export const saveDropdownRef = (ref: DropdownAlert) => {
  references.dropdownAlert = ref;
};

/**
 * Notify without translation.
 */
export const rawNotify = (
  type: DropdownAlertType,
  title: string,
  message: string,
) => {
  references.dropdownAlert?.alertWithType(type, title, message);
};

/**
 * default notification service.
 */
export const notify = async (
  type: DropdownAlertType,
  title: string,
  message: string,
) => {
  const t = await localization;
  rawNotify(type, t(title), t(message));
};

/**
 * Warn user.
 */
export const alertWarning = (title: string, message: string) => {
  notify('warn', title, message);
};

/**
 * Inform user.
 */
export const alertInfo = (title: string, message: string) => {
  notify('info', title, message);
};

/**
 * Notify user with success user.
 */
export const alertSuccess = (title: string, message: string) => {
  notify('success', title, message);
};

/**
 * Notify user with danger info.
 */
export const alertError = (title: string, message: string) => {
  notify('error', title, message);
};
