import {ScrollView} from 'react-native';
import {createRef, useCallback, useEffect, useState} from 'react';
import {Platform, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {signIn} from 'store/registration/sagaActions';

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

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    } else {
      Keyboard.addListener('keyboardDidShow', keyboardWillShow);
    }
    return () => {
      if (Platform.OS === 'ios') {
        Keyboard.removeListener('keyboardWillShow', keyboardWillShow);
      } else {
        Keyboard.removeListener('keyboardDidShow', keyboardWillShow);
      }
    };
  }, [keyboardWillShow]);

  const keyboardWillShow = useCallback(() => {
    scrollViewRef?.current?.scrollToEnd();
  }, [scrollViewRef]);

  const toggleSwitch = () => setSaveIsEnabled(!saveIsEnabled);

  const onSubmit = async ({username, password}) => {
    Keyboard.dismiss();
    dispatch(
      signIn({
        username: '00000000001',
        password: 'msofliomshvidoba',
        // username,
        // password,
      }),
    );
  };

  const footerHandler = () => {
    setValue('email', '');
    setValue('password', '');
    navigate('Register');
  };

  return {
    setPasswordVisible,
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
