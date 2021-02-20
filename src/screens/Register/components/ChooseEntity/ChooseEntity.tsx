import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {EntitySelector, Button} from 'components';
import useChooseEntity from './useChooseEntity';

const ChooseEntity: ChooseEntityFC = ({lastStep, customerType}) => {
  const {onSubmit, selectedType, setSelectedType} = useChooseEntity({
    lastStep,
    customerType,
  });

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
        text="continue"
        onPress={() => onSubmit()}
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
