import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  updateRegisterDataAction,
} from 'store/ducks/authDuck';
import {useDispatch} from 'react-redux';
import {EntitySelector, Button} from 'components';

const ChooseEntity = ({lastStep, customerType}) => {
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
        disabled={!selectedType}
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

export default ChooseEntity;
