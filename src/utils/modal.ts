import {Modal, SentOTPModal} from 'components';
import {ConfigureModal} from 'types/global';
import {NotificationsListModal} from 'screens/Service/components';
import {config} from 'utils';
import references from './references';

/**
 * Save modal reference.
 */
export const saveModalRef = (ref: Modal) => {
  references.modal = ref;
};

/**
 * Show modal.
 */
export const show = () => {
  references.modal?.show();
};

/**
 * Close modal.
 */
export const close = () => {
  references.modal?.close();
};

/**
 * Configure modal.
 */
export const configureModal: ConfigureModal = ({element, props, style}) => {
  references.modal?.configure({
    element,
    props,
    style,
  });
};

/**
 * Show sent one-time-password modal.
 */
export const showSentOTPModal = () => {
  configureModal({
    element: SentOTPModal(),
    style: {
      marginVertical: config.mobileHeight * 0.34,
      paddingVertical: 18,
      paddingHorizontal: 28,
      borderRadius: 22,
    },
  });

  show();
};

/**
 * Show available services modal.
 */
export const showNotificationsListModal = () => {
  configureModal({
    element: NotificationsListModal(),
    style: {
      marginVertical: config.mobileHeight * 0.1,
      marginHorizontal: config.mobileWidth * 0.05,
    },
  });

  show();
};
