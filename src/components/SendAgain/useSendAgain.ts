import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import {sendOTP} from 'store/registration/sagaActions';

const useSendAgain = ({sendAgainDuration, phoneNumber}: SendAgainProps) => {
  const dispatch = useDispatch();
  const width = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(false);

  /**
   * Button animation when user have to
   * wait before it will be possible to
   * one-time-password to be send again.
   */
  const sendOTPAnimation = useMemo(
    () =>
      Animated.timing(width, {
        toValue: 1,
        useNativeDriver: false,
        duration: sendAgainDuration! * 1000,
      }),
    [width, sendAgainDuration],
  );

  /**
   * On mount start OTP animation.
   */
  useEffect(() => {
    setLoading(true);
    sendOTPAnimation.start(() => setLoading(false));
  }, [sendOTPAnimation]);

  /**
   * Send one-time-password to user.
   */
  const sendOTPRequest = useCallback(() => {
    if (loading === true) {
      return;
    }
    dispatch(sendOTP(phoneNumber));
    setLoading(true);
    sendOTPAnimation.reset();
    sendOTPAnimation.start(() => setLoading(false));
  }, [dispatch, sendOTPAnimation, phoneNumber, loading, setLoading]);

  return {
    sendOTPAnimation,
    sendOTPRequest,
    loading,
    width,
  };
};

export default useSendAgain;
