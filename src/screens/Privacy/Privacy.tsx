import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {BaseHeader, Text} from 'components';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme';

const Privacy = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <BaseHeader title="privacy" />
      <ScrollView style={styles.textScrollContainer}>
        <Text style={styles.text}>{t('privacyText')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({
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
