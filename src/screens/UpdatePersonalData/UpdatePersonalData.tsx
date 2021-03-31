import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {BaseHeader, Text, PersonalDataInput} from 'components';

const UpdatePersonalData = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <BaseHeader />
        <Text style={styles.title}>{t('updatePersonalData.title')}</Text>
        <PersonalDataInput
          value=""
          onChangeText={() => {}}
          label="rame"
          style={{}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdatePersonalData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  scrollViewContentContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 30,
  },
});
