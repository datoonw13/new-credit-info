import * as SVG from 'assets/svg';
import {goTo} from 'utils/navigation';

export const itemList = [
  {
    id: 1,
    screen: 'Dashboard',
    ActiveIcon: SVG.DashboardActive,
    InactiveIcon: SVG.DashboardInactive,
    navigate: () => goTo('AfterAuthMainStackNavigator', 'Dashboard'),
  },
  {
    id: 2,
    screen: 'Simulator',
    ActiveIcon: SVG.SimulatorActive,
    InactiveIcon: SVG.SimulatorInactive,
    navigate: () => goTo('AfterAuthMainStackNavigator', 'Simulator'),
  },
  {
    id: 3,
    screen: 'Credits',
    ActiveIcon: SVG.CreditsActive,
    InactiveIcon: SVG.CreditsInactive,
    navigate: () => goTo('AfterAuthMainStackNavigator', 'Credits'),
  },
  {
    id: 4,
    screen: 'CompanyManagement',
    ActiveIcon: SVG.CompanyManagementActive,
    InactiveIcon: SVG.CompanyManagementInactive,
    navigate: () => goTo('AfterAuthMainStackNavigator', 'CompanyManagement'),
  },
  {
    id: 5,
    screen: 'Payments',
    ActiveIcon: SVG.PaymentsActive,
    InactiveIcon: SVG.PaymentsInactive,
    navigate: () => goTo('AfterAuthMainStackNavigator', 'Payments'),
  },
];
