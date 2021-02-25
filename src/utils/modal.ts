import Modal from 'components/Modal';
import SentOTPModal from 'components/SentOTPModal';
import {ConfigureModal} from 'types/global';
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
  references.modal?.configure({
    element: SentOTPModal,
    style: {
      marginVertical: config.mobileHeight * 0.34,
      paddingVertical: 18,
      paddingHorizontal: 28,
      borderRadius: 22,
    },
    props: {},
  });

  references.modal?.show();
};
