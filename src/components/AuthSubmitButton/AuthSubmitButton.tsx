import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {translate} from '../../services/localizeService';
import {RED1, WHITE} from '../../theme/colors';
import {FIRAGO_MEDIUM} from '../../theme/fonts';

const AuthSubmitButton = ({text, onPress, disabled}) => {
  return (
    <TouchableOpacity disabled={disabled} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{translate(text)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    backgroundColor: RED1,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 17,
    marginRight: 17,
  },
  text: {
    color: WHITE,
    fontFamily: FIRAGO_MEDIUM,
    fontSize: 14,
  },
});

export default AuthSubmitButton;
