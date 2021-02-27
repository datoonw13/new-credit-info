import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, Divider} from 'react-native-elements';
import * as colors from 'theme/colors';
import {Button, Text} from 'components';
import useAcceptTerms from './useAcceptTerms';
import {useTranslation} from 'react-i18next';
import HTML from 'react-native-render-html';
import {config} from 'utils';
import {ScrollView} from 'react-native-gesture-handler';

const AcceptTerms: AcceptTermsFC = ({lastStep}) => {
  const {onSubmit, checked, setChecked, agreement} = useAcceptTerms({lastStep});
  const {t} = useTranslation();
  return (
    <>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          style={styles.agreementContainer}
          contentContainerStyle={styles.agreementScrollView}
          nestedScrollEnabled>
          {agreement && (
            <HTML
              source={{html: agreement}}
              ignoredStyles={['font-weight', 'font-family']}
              contentWidth={config.mobileWidth}
            />
          )}
        </ScrollView>
      </View>
      <CheckBox
        center
        title={t('registration.acceptTerms')}
        containerStyle={styles.container}
        iconType="fontisto"
        checkedIcon="checkbox-active"
        uncheckedIcon="checkbox-passive"
        uncheckedColor={colors.GRAY8}
        checkedColor={colors.crimson}
        checked={checked}
        onPress={lastStep === 5 ? () => setChecked(!checked) : undefined}
      />
      <Divider />
      <Button text="continue" disabled={!checked} onPress={() => onSubmit()} />
    </>
  );
};

export default AcceptTerms;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  agreementScrollView: {
    padding: 20,
  },
  agreementContainer: {
    backgroundColor: colors.blackOp05,
    padding: 10,
    borderColor: colors.blackOp1,
    borderWidth: 1,
    borderRadius: 12,
  },
  paragraph: {
    marginBottom: 20,
  },
  heading: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
  },
  description: {
    lineHeight: 25,
    fontSize: 13,
  },
});
