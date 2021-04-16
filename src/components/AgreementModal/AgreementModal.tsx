import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';
import HTMLRenderer from 'react-native-render-html';
import Text from 'components/Text';
import {config} from 'utils';
import {colors} from 'theme';
import {CheckBox} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import {useTermsAndConditions} from 'hooks';
import Button from 'components/Button';
import useAgreementModal from './useAgreementModal';

const AgreementModal = () => {
  const {t} = useTranslation();
  const {userAgreement} = useTermsAndConditions();
  const {agreementChecked, onAgreementToggle, onPress} = useAgreementModal();
  return (
    <Modal isVisible style={styles.modalContainer} backdropOpacity={0.5}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>{t('termsAndConditions.title')}</Text>
        <ScrollView
          style={styles.agreementScrollViewContainer}
          contentContainerStyle={styles.agreementScrollViewContent}>
          {userAgreement && (
            <HTMLRenderer
              source={{html: userAgreement}}
              ignoredStyles={['font-weight', 'font-family']}
            />
          )}
        </ScrollView>
        <View style={styles.agreementActionContainer}>
          <CheckBox
            containerStyle={styles.checkbox}
            onPress={onAgreementToggle}
            checked={agreementChecked}
          />
          <Text style={styles.agreeText}>
            {t('termsAndConditions.acceptTerms')}
          </Text>
        </View>
        <Button
          touchableStyle={styles.agreeButton}
          onPress={onPress}
          text="agree"
        />
      </View>
    </Modal>
  );
};

export default AgreementModal;

const styles = StyleSheet.create({
  modalContainer: {
    marginVertical: config.mobileHeight * 0.1,
    marginHorizontal: config.mobileWidth * 0.05,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: colors.white,
  },
  heading: {
    textAlign: 'center',
    marginVertical: 22,
    fontSize: 15,
    fontWeight: 'bold',
  },
  agreementScrollViewContainer: {
    flex: 1,
    backgroundColor: colors.blackOp025,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.blackOp1,
    borderRadius: 10,
  },
  agreementScrollViewContent: {
    paddingBottom: 40,
  },
  agreementActionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  checkbox: {
    position: 'relative',
    bottom: 10,
  },
  agreeText: {
    width: '78%',
    paddingRight: 10,
  },
  agreeButton: {
    width: '90%',
    marginLeft: '5%',
    marginTop: 5,
    marginBottom: 22,
  },
});
