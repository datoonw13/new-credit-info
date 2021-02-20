import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme';
import {LanguageButton} from './components';

const LanguageSwitcher = () => {
  const {i18n} = useTranslation();

  return (
    <View style={styles.container}>
      <LanguageButton type="ქართული" active={i18n.language === 'ka'} />
      <LanguageButton type="English" active={i18n.language === 'en'} />
    </View>
  );
};

export default LanguageSwitcher;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blackOp5,
    paddingVertical: 5,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
