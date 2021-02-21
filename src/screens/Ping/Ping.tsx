import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {checkSignedInAction} from 'store/registration/sagaActions';

const PingScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkSignedInAction());
  }, [dispatch]);

  return <></>;
};

export default PingScreen;
