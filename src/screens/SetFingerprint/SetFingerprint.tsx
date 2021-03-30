import React from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {BaseHeader, Button, Text} from 'components';
import {Fingerprint} from 'assets/svg';
import {colors} from 'theme';

const SetFingerprint = () => {
  const {t} = useTranslation();

  const onActivatePress = () =>
    Alert.alert('ბოდიში მომითხოვია', 'ჯერ ბექთან არაა მიბმული...');

  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{t('security.easyAuth')}</Text>
        <View style={styles.iconWrapper}>
          <Fingerprint width={25} height={25} />
        </View>
        <Text style={styles.description}>
          {t('security.easyAuthDescription')}
        </Text>
        <Button text="activate" onPress={onActivatePress} />
      </View>
    </SafeAreaView>
  );
};

export default SetFingerprint;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  iconWrapper: {
    padding: 8,
    backgroundColor: colors.crimsonOp1,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    color: colors.blackOp8,
    marginBottom: 30,
  },
});
