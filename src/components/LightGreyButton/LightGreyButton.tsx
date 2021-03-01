import React from 'react';
import {StyleSheet} from 'react-native';
import Button from 'components/Button';
import {colors} from 'theme';
import {LightGreyButtonFC} from './types';

const LightGreyButton: LightGreyButtonFC = ({
  touchableContainer,
  contentContainer,
  textStyle,
  onPress,
  text,
}) => {
  return (
    <Button
      text={text}
      onPress={onPress}
      touchableStyle={[styles.okButtonTouchable, touchableContainer]}
      containerStyle={[styles.okButtonContainer, contentContainer]}
      textStyle={[styles.okButtonText, textStyle]}
    />
  );
};

export default LightGreyButton;

const styles = StyleSheet.create({
  okButtonTouchable: {
    width: '80%',
  },
  okButtonContainer: {
    backgroundColor: colors.blackOp1,
  },
  okButtonText: {
    color: colors.black,
  },
});
