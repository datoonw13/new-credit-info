import {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import * as colors from 'theme/colors';
import {UseInputProps} from './types';

const PersonalDataInput = ({errorMessage}: UseInputProps) => {
  const height = useRef(new Animated.Value(0)).current;
  const [inputBorderColor, setInputBorderColor] = useState(colors.blackOp5);

  /**
   * Control animation on error Value.
   */
  useEffect(() => {
    const toValue = errorMessage ? 20 : 0;
    const borderColor = errorMessage ? colors.crimson : colors.blackOp5;
    setInputBorderColor(borderColor);

    Animated.timing(height, {
      toValue,
      useNativeDriver: false,
      duration: 1000,
    }).start();
  }, [errorMessage, height, inputBorderColor]);

  return {
    inputBorderColor,
    height,
  };
};

export default PersonalDataInput;
