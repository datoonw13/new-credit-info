import {
  NavigationContainerRef,
  CommonActions,
  DrawerActions,
} from '@react-navigation/native';
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
  console.log(references.navigator);
  references.navigator?.dispatch(CommonActions.navigate(stack, {screen}));
};

/**
 * Open drawer.
 */
export const openDrawer = () => {
  references.navigator?.dispatch(DrawerActions.openDrawer());
};

/**
 * Open drawer.
 */
export const toggleDrawer = () => {
  references.navigator?.dispatch(DrawerActions.toggleDrawer());
};

/**
 * Get current route name.
 */
export const getCurrentRoute = () => {
  return references.navigator?.getCurrentRoute()?.name;
};
