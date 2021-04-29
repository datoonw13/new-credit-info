import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import NonAuthorized from './NonAuthorized';
import Authorized from './Authorized';
import {Opening, Reports, Test} from 'screens';
import {saveReference} from 'utils/navigation';
import {selectAuth} from 'store/select';
import {goToSignInWithFingerprint} from './helpers';
import {useDispatch} from 'react-redux';
import {signIn} from 'store/auth/sagaActions';
import {getCredentials, ifCredentialsSetPassword} from 'utils/keychain';
import ServiceSubscriptionNavigator from './ServiceSubscription';

const Navigation = () => {
  const {authStatus} = useSelector(selectAuth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   /**
  //    * Navigate to use passcode screen if
  //    * storage has credentials.
  //    */
  //   if (authStatus === 'NON_AUTHORIZED') {
  //     goToSignInWithFingerprint();
  //   }
  // }, [authStatus, dispatch]);

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
  //           username: '36001051963',
  //           password: 'atasertigame',
  //         }),
  //       );
  //     }
  //   };

  //   authenticate();
  // }, [dispatch]);

  // if (authStatus === null) {
  //   return <Opening />;
  // }

  // console.log({authStatus});
  return (
    <NavigationContainer ref={saveReference}>
      <ServiceSubscriptionNavigator />
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer ref={saveReference}>
  //     {authStatus !== 'NON_AUTHORIZED' ? <Authorized /> : <NonAuthorized />}
  //   </NavigationContainer>
  // );
};

export default Navigation;
