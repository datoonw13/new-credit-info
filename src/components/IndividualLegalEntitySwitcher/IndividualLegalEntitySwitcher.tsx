import React from 'react';
import Text from 'components/Text';
import {IndividualLegalEntitySwitcherFC} from './types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme';

const IndividualLegalEntitySwitcher: IndividualLegalEntitySwitcherFC = ({
  entityType,
  setEntityType,
  style,
}) => {
  const {t} = useTranslation();
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[
          styles.entity,
          entityType === 'Individual' ? styles.borderBottomCrimson : {},
        ]}
        onPress={() => setEntityType('Individual')}>
        <Text style={styles.text}>{t('individualPerson')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.entity,
          entityType === 'LegalEntity' ? styles.borderBottomCrimson : {},
        ]}
        onPress={() => setEntityType('LegalEntity')}>
        <Text style={styles.text}>{t('legalEntity')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndividualLegalEntitySwitcher;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  entity: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.lightGrey,
  },
  borderBottomCrimson: {
    borderBottomWidth: 3,
    borderBottomColor: colors.crimson,
  },
  text: {
    fontSize: 15,
  },
});
