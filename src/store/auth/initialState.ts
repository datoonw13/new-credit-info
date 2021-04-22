import {AuthState} from 'store/types';

const authInitialState: AuthState = {
  isLoading: true,
  authStatus: 'NON_AUTHORIZED',
};

export default authInitialState;
