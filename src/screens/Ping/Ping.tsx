import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {checkSignedIn} from 'store/registration/sagaActions';

const PingScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkSignedIn());
  }, [dispatch]);

  return <></>;
};

export default PingScreen;
