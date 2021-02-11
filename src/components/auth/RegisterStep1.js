import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BLACK, GRAY5, GRAY8, GRAY7, RED1, WHITE} from '../../theme/colors';
import AuthSubmitButton from './AuthSubmitButton';
import {Divider} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FIRAGO_MEDIUM} from '../../theme/fonts';
import {translate} from '../../services/localizeService';
import {
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  updateRegisterDataAction,
} from '../../store/ducks/authDuck';
import {useDispatch} from 'react-redux';

const RegisterStep1 = ({lastStep, customerType}) => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = React.useState(customerType);

  const onSubmit = () => {
    if (lastStep === 1) {
      dispatch(updateRegisterDataAction({customerType: selectedType}));
      dispatch(setRegisterLastStepAction(2));
    }
    dispatch(setRegisterSelectedStepAction(2));
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          disabled={lastStep !== 1}
          style={{...styles.selectionBox, marginRight: 6}}
          onPress={() => setSelectedType('PERSON')}>
          {selectedType === 'PERSON' ? (
            <View style={styles.selectionCircle}>
              <View style={styles.selectionCircleInner} />
            </View>
          ) : null}
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons size={28} color={RED1} name="human-male" />
          </View>
          <Text style={styles.text}>{translate('PHYSICAL_ENTITY')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={lastStep !== 1}
          style={{...styles.selectionBox, marginTop: 20, marginLeft: 6}}
          onPress={() => setSelectedType('COMPANY')}>
          {selectedType === 'COMPANY' ? (
            <View style={styles.selectionCircle}>
              <View style={styles.selectionCircleInner} />
            </View>
          ) : null}
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons size={28} color={RED1} name="human-male" />
          </View>
          <Text style={styles.text}>{translate('LEGAL_ENTITY')}</Text>
        </TouchableOpacity>
      </View>
      <Divider />
      <AuthSubmitButton
        text={'CONTINUE'}
        disabled={selectedType === null}
        onPress={() => onSubmit(selectedType)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 170,
  },
  selectionBox: {
    flex: 1,
    backgroundColor: GRAY5,
    borderWidth: 1,
    borderColor: GRAY8,
    borderRadius: 16,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: GRAY7,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: BLACK,
    fontSize: 14,
    fontFamily: FIRAGO_MEDIUM,
    marginTop: 20,
  },
  selectionCircle: {
    position: 'absolute',
    left: 16,
    top: 16,
    width: 22,
    height: 22,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: GRAY7,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionCircleInner: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: RED1,
  },
});

export default RegisterStep1;
