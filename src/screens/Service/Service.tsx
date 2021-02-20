import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Text,
  BaseHeader,
  ServiceSwitcher,
  IndividualLegalEntitySwitcher,
} from 'components';
import useService from './useService';
import {colors} from 'theme';

const Service = () => {
  const {serviceType, setServiceType, entityType, setEntityType} = useService();
  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader title="service" />
      <IndividualLegalEntitySwitcher
        entityType={entityType}
        setEntityType={setEntityType}
        style={styles.entitySwitcher}
      />
      <ServiceSwitcher
        style={styles.serviceSwitcher}
        serviceType={serviceType}
        onPress={setServiceType}
      />
      <Text>this life</Text>
    </SafeAreaView>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  entitySwitcher: {
    marginTop: 32,
  },
  serviceSwitcher: {
    marginHorizontal: 15,
    marginTop: 22,
    marginBottom: 12,
  },
});
