import React from 'react';
import {ScrollView, View, StyleSheet, Platform} from 'react-native';
import {BaseHeader, Text} from 'components';
import useTermsAndConditions from 'hooks/useTermsAndConditions';
import HTMLRenderer from 'react-native-render-html';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from 'theme';

const TermsAndConditions = () => {
  const {userAgreement, lastModifyText} = useTermsAndConditions();

  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader title="termsAndConditions.title" />
      <ScrollView
        style={styles.scrollViewWrapper}
        contentContainerStyle={styles.scrollViewContent}>
        {userAgreement !== null && (
          <HTMLRenderer
            source={{html: userAgreement}}
            ignoredStyles={['font-weight', 'font-family']}
          />
        )}
      </ScrollView>
      <View>
        <Text style={styles.lastModifyText}>{lastModifyText}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  scrollViewWrapper: {
    marginVertical: 20,
    height: Platform.OS === 'ios' ? '90%' : '88%',
  },
  scrollViewContent: {
    width: '90%',
    marginLeft: '5%',
  },
  lastModifyText: {
    textAlign: 'right',
    paddingRight: 20,
    color: colors.blackOp7,
    fontSize: 12,
  },
});
