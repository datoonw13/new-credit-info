import {getCurrentRoute} from 'utils/navigation';

/**
 * Determine if current tab is active.
 */
export const isActiveTab = (screen: string) => {
  const currentRoute = getCurrentRoute();
  return currentRoute === screen || isDashboard(screen);
};

/**
 * Determine if current tab is dashboard.
 */
export const isDashboard = (screen: string) => {
  const currentRoute = getCurrentRoute();
  return screen === 'Dashboard' && currentRoute === 'BottomTabNavigator';
};
