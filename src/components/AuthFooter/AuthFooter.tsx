import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {translate} from 'services/localizeService';
import * as colors from 'theme/colors';
import {FIRAGO_LIGHT, FIRAGO_REGULAR} from 'theme/fonts';

const AuthFooter: AuthFooterFC = ({mode, handler, text, link}) => {
  return (
    <>
      {mode === 'link' ? (
        <View style={styles.container}>
          <Text style={styles.textStyle}>{text}</Text>
          <TouchableOpacity onPress={handler}>
            <Text style={styles.linkStyle}>{link}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity onPress={handler}>
            <Text style={styles.linkStyle}>{translate('GO_BACK')}</Text>
          </TouchableOpacity>
        </View>
      )}
      <SafeAreaView style={{backgroundColor: colors.white}} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 40,
    borderTopWidth: 1,
    borderColor: colors.GRAY4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.black,
    fontFamily: FIRAGO_LIGHT,
    fontSize: 12,
    marginRight: 10,
  },
  linkStyle: {
    color: colors.blue,
    fontFamily: FIRAGO_REGULAR,
    fontSize: 12,
  },
});

export default AuthFooter;
