import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as colors from 'theme/colors';
import {FIRAGO_LIGHT, FIRAGO_REGULAR} from 'theme/fonts';

const AuthFooter: AuthFooterFC = ({mode, handler, text, link}) => {
  const {t} = useTranslation();
  return (
    <>
      {mode === 'link' ? (
        <View style={styles.container}>
          <Text style={styles.textStyle}>{text && t(text)}</Text>
          <TouchableOpacity onPress={handler}>
            <Text style={styles.linkStyle}>{link && t(link)}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity onPress={handler}>
            <Text style={styles.linkStyle}>{t('back')}</Text>
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
