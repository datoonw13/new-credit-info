import React from 'react';
import {StyleSheet, Text as NativeText} from 'react-native';
import {translate} from 'services/localizeService';

const Text = ({
  dontTranslate = false,
  capsBold = false,
  caps = false,
  children,
  style,
  ...allTheRest
}) => {
  return (
    <NativeText
      style={[
        styles.text,
        style,
        caps ? styles.caps : {},
        capsBold ? styles.capsBold : {},
      ]}
      children={dontTranslate ? children : translate(children)}
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
