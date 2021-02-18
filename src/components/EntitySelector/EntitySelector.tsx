import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import * as colors from 'theme/colors';
import Text from 'components/Text';
import {
  LegalEntity,
  IndividualEntity,
  LegalEntitySelected,
  IndividualEntitySelected,
} from 'assets/svg';

const EntitySelector: EntitySelectorFC = ({
  selectedType,
  lastStep,
  onPress,
  entity,
}) => {
  const EntityIcon = entity === 'PERSON' ? IndividualEntity : LegalEntity;
  const EntityIconSelected =
    entity === 'PERSON' ? IndividualEntitySelected : LegalEntitySelected;

  return (
    <TouchableOpacity
      disabled={lastStep !== 1}
      style={[
        styles.selectionBox,
        entity === 'PERSON' ? styles.personMargins : styles.companyMargins,
        entity === selectedType ? styles.selectedBox : {},
      ]}
      onPress={onPress}>
      <View
        style={[
          styles.iconContainer,
          selectedType === entity ? styles.selectedIcon : {},
        ]}>
        {selectedType === entity ? <EntityIconSelected /> : <EntityIcon />}
      </View>
      <Text
        style={[
          styles.text,
          selectedType === entity ? styles.selectedText : {},
        ]}>
        {entity === 'PERSON' ? 'PHYSICAL_ENTITY' : 'LEGAL_ENTITY'}
      </Text>
    </TouchableOpacity>
  );
};

export default EntitySelector;

const styles = StyleSheet.create({
  selectionBox: {
    flex: 1,
    backgroundColor: colors.GRAY5,
    borderWidth: 1,
    borderColor: colors.GRAY8,
    borderRadius: 16,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  selectedBox: {
    backgroundColor: colors.greenOp1,
    borderColor: colors.greenOp2,
  },
  personMargins: {
    marginRight: 6,
  },
  companyMargins: {
    marginLeft: 6,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.GRAY7,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIcon: {
    backgroundColor: colors.greenOp1,
    borderWidth: 0,
  },
  text: {
    color: colors.black,
    fontSize: 14,
    marginTop: 20,
  },
  selectedText: {
    color: colors.green,
  },
});
