import navigationService from '../../services/navigationService';
import notificationService from '../../services/notificationService';

export const DEFAULT = 'my-creditinfo/main/default';
export const RESET_STORE = 'my-creditinfo/main/resetStore';
export const CHECKED_SIGNED_IN = 'my-creditinfo/main/checkedSignedIn';

const initialState = {
  isLoading: true,
  isSignedIn: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED_SIGNED_IN:
      return {
        ...state,
        isLoading: false,
        isSignedIn: action.isSignedIn,
      };
    case DEFAULT:
      return state;
    default:
      return state;
  }
};

export const resetStoreAction = () => ({
  type: RESET_STORE,
});

export const navigateAction = (screen) => {
  navigationService.navigate(screen);
  return {
    type: DEFAULT,
  };
};

export const notifyAction = (type, title, message) => {
  notificationService.notify(type, title, message);
  return {
    type: DEFAULT,
  };
};
