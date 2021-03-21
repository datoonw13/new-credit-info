import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as services from 'services';
import {setAuthStatusAction} from 'store/auth/actions';
import {signOut} from 'store/auth/sagaActions';

const useAuthCheck = () => {
  const dispatch = useDispatch();

  /**
   * Try to get countries, if it goes to error,
   * then sing out, if it ain't, then
   * user is authorized.
   */
  const refreshAuthState = useCallback(async () => {
    try {
      await services.getCountries();
      dispatch(setAuthStatusAction(true));
    } catch (e) {
      dispatch(signOut());
    }
  }, [dispatch]);

  useEffect(() => {
    // refreshAuthState();
  }, [refreshAuthState]);
};

export default useAuthCheck;
