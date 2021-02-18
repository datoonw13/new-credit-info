import {NavigationContainerRef, CommonActions} from '@react-navigation/native';
import references from './references';

/**
 * Save reference to navigator.
 */
export const saveReference = (navigator: NavigationContainerRef) => {
  references.navigator = navigator;
};

/**
 * Manual navigation.
 */
export const goTo = (stack: string, screen: string) => {
  references.navigator?.dispatch(CommonActions.navigate(stack, {screen}));
};
