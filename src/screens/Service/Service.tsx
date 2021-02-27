import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  IndividualLegalEntitySwitcher,
  ServiceSwitcher,
  BaseHeader,
} from 'components';
import {Package, Info} from './components';
import useService from './useService';
import {colors} from 'theme';
import {Divider} from 'react-native-elements';

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
      <Info text="serviceScreen.promote" />
      <Divider />
      <Package />
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
