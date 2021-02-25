import React from 'react';
import {StyleSheet} from 'react-native';
import Button from 'components/Button';
import {colors} from 'theme';

const LightGreyButton: LightGreyButtonFC = ({onPress, text}) => {
  return (
    <Button
      text={text}
      onPress={onPress}
      touchableStyle={styles.okButtonTouchable}
      containerStyle={styles.okButtonContainer}
      textStyle={styles.okButtonText}
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
