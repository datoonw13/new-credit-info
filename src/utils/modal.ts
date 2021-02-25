import {Modal} from 'components';
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
}
