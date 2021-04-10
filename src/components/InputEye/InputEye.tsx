import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'theme';

const InputEye: InputEyeFC = ({visible}) => {
  return (
    <Ionicons
      name={visible ? 'eye-off' : 'eye'}
      color={colors.GRAY8}
      size={22}
    />
  );
};

export default InputEye;
