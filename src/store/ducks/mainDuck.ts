export const DEFAULT = 'my-creditinfo/main/default';
export const RESET_STORE = 'my-creditinfo/main/resetStore';
export const CHECKED_SIGNED_IN = 'my-creditinfo/main/checkedSignedIn';

const initialState = {
  isLoading: true,
  isSignedIn: false,
};

export const mainReducer = (state = initialState, action: any) => {
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
