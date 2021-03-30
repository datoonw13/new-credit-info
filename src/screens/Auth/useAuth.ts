import {ScrollView} from 'react-native';
import {createRef, useCallback, useEffect, useState} from 'react';
import {Platform, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {signIn} from 'store/auth/sagaActions';
import {Credentials} from 'types/global';
import {getRememberedUser} from 'utils/storage';

const useAuth = () => {
  const {navigate} = useNavigation();
  const scrollViewRef = createRef<ScrollView>();
  const dispatch = useDispatch();
  const {control, handleSubmit, errors, setValue} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [saveIsEnabled, setSaveIsEnabled] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  /**
   * Scroll to end.
   */
  const scrollToEnd = useCallback(() => {
    scrollViewRef?.current?.scrollToEnd();
  }, [scrollViewRef]);

  /**
   * On keyboard appearing scroll to end.
   */
  useEffect(() => {
    const event =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    Keyboard.addListener(event, scrollToEnd);
    return () => Keyboard.removeListener(event, scrollToEnd);
  }, [scrollToEnd]);

  const toggleSwitch = () => setSaveIsEnabled(!saveIsEnabled);

  /**
   * Got to ForgotPassword screen.
   */
  const goToForgoPassword = () => navigate('ForgotPassword');

  /**
   * Sign in to the account.
   */
  const onSubmit = async ({username, password}: Credentials) => {
    Keyboard.dismiss();
    dispatch(
      signIn({
        username,
        password,
        rememberMe: saveIsEnabled,
      }),
    );
  };

  /**
   * Clear the inputs and go to Register screen.
   */
  const footerHandler = () => {
    setValue('username', '');
    setValue('password', '');
    navigate('Register');
  };

  /**
   * Set remembered user value.
   */
  useEffect(() => {
    (async () => {
      const rememberedUserName = await getRememberedUser();

      if (rememberedUserName !== null) {
        setSaveIsEnabled(true);
        setValue('username', rememberedUserName);
      }
    })();
  }, [setValue]);

  return {
    setPasswordVisible,
    goToForgoPassword,
    passwordVisible,
    footerHandler,
    saveIsEnabled,
    scrollViewRef,
    toggleSwitch,
    handleSubmit,
    onSubmit,
    control,
    errors,
  };
};

export default useAuth;
