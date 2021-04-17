import {AuthState} from 'store/types';

const authInitialState: AuthState = {
  isLoading: true,
  isSignedIn: false,
};

export default authInitialState;
