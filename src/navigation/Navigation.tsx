import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import NonAuthorized from './NonAuthorized';
import Authorized from './Authorized';
import {Opening} from 'screens';
import {saveReference} from 'utils/navigation';
import {selectAuth, selectAppMode} from 'store/select';
import {goToSignInWithFingerprint} from './helpers';
import {useDispatch} from 'react-redux';
import * as appActions from 'store/app/actions';
import {signIn} from 'store/auth/sagaActions';
import {getCredentials, ifCredentialsSetPassword} from 'utils/keychain';

const Navigation = () => {
  const {isSignedIn} = useSelector(selectAuth);
  const appMode = useSelector(selectAppMode);
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * Navigate to use passcode screen if
     * storage has credentials.
     */
    dispatch(appActions.setAppMode('INITIATION'));

    if (!isSignedIn) {
      goToSignInWithFingerprint();
      setTimeout(() => dispatch(appActions.setAppMode('NON_AUTHORIZED')), 3000);
    } else {
      setTimeout(() => dispatch(appActions.setAppMode('AUTHORIZED')), 3000);
    }
  }, [isSignedIn, dispatch]);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const authenticate = async () => {
  //     const credentials = await getCredentials();

  //     if (credentials) {
  //       const {username, password} = credentials;
  //       dispatch(
  //         signIn({
  //           username,
  //           password,
  //         }),
  //       );
  //     } else {
  //       dispatch(
  //         signIn({
  //           username: '00000000000',
  //           password: 'atasertigame',
  //         }),
  //       );
  //     }
  //   };

  //   authenticate();
  // }, [dispatch]);

  // return <PaymentInstructions />;

  if (appMode === 'INITIATION') {
    return <Opening />;
  }

  return (
    <NavigationContainer ref={saveReference}>
      {isSignedIn ? <Authorized /> : <NonAuthorized />}
    </NavigationContainer>
  );
};

export default Navigation;
