import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import NonAuthorized from './NonAuthorized';
import Authorized from './Authorized';
import {saveReference} from 'utils/navigation';
import {selectAuth} from 'store/select';
import {goToSignInWithFingerprint} from './helpers';
import {useDispatch} from 'react-redux';

const Navigation = () => {
  const {authStatus} = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * Navigate to use passcode screen if
     * storage has credentials.
     */
    if (authStatus === 'NON_AUTHORIZED') {
      goToSignInWithFingerprint();
    }
  }, [authStatus, dispatch]);

  return (
    <NavigationContainer ref={saveReference}>
      {authStatus !== 'NON_AUTHORIZED' ? <Authorized /> : <NonAuthorized />}
    </NavigationContainer>
  );
};

export default Navigation;
