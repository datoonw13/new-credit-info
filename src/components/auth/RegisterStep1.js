import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BLACK, GRAY5, GRAY8, GRAY7, WHITE} from '../../theme/colors';
import {Divider} from 'react-native-elements';
import {FIRAGO_MEDIUM} from '../../theme/fonts';
import {
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  updateRegisterDataAction,
} from '../../store/ducks/authDuck';
import {useDispatch} from 'react-redux';
import Button from '../shared/Button';
import EntitySelector from './EntitySelector';

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
        <EntitySelector
          entity="PERSON"
          lastStep={lastStep}
          selectedType={selectedType}
          onPress={() => setSelectedType('PERSON')}
        />
        <EntitySelector
          entity="COMPANY"
          lastStep={lastStep}
          selectedType={selectedType}
          onPress={() => setSelectedType('COMPANY')}
        />
      </View>
      <Divider />
      <Button
        text="CONTINUE"
        onPress={() => onSubmit(selectedType)}
        disabled={selectedType === null}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 170,
  },
});

export default RegisterStep1;
