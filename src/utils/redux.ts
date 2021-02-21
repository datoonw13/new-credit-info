import {Store} from 'redux';
import references from 'utils/references';

/**
 * Get redux store.
 */
export const getStore = () => {
  return references.reduxStore;
};

/**
 * Save store reference.
 */
export const saveStoreRef = (store: Store<any, any>) => {
  references.reduxStore = store;
};
