import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Platform} from 'react-native';
import {BaseHeader, Text} from 'components';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme';

const Privacy = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader title="privacy" />
      <ScrollView style={styles.textScrollContainer}>
        <Text style={styles.text}>{t('privacyText')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 10 : 0,
  },
  textScrollContainer: {
    padding: 16,
    paddingTop: 0,
    marginVertical: 20,
  },
  text: {
    lineHeight: 20,
    fontSize: 14,
    color: colors.blackOp8,
    paddingBottom: 20,
  },
});
