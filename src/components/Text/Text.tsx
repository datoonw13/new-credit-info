import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text as NativeText, Animated} from 'react-native';
import {TextPropsFC} from './type';

const Text: TextPropsFC = ({
  dontTranslate = false,
  capsBold = false,
  caps = false,
  animated,
  children,
  style,
  ...allTheRest
}) => {
  const {t} = useTranslation();

  const ReactNativeText = animated ? Animated.Text : NativeText;

  return (
    <ReactNativeText
      style={[
        styles.text,
        style,
        caps ? styles.caps : {},
        capsBold ? styles.capsBold : {},
      ]}
      children={dontTranslate ? children : t(children)}
      {...allTheRest}
    />
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    letterSpacing: 0.6,
  },
  caps: {
    textTransform: 'uppercase',
  },
  capsBold: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
