import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Slider from 'react-native-snap-carousel';
import {
  IndividualLegalEntitySwitcher,
  ServiceSwitcher,
  BaseHeader,
} from 'components';
import {Package, Info} from './components';
import useService from './useService';
import {colors} from 'theme';
import {Divider} from 'react-native-elements';
import {config} from 'utils';

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
      <Slider
        data={[{}, {}, {}, {}]}
        renderItem={() => <Package />}
        itemWidth={config.mobileWidth * 0.8}
        sliderWidth={config.mobileWidth}
        callbackOffsetMargin={10}
        activeSlideAlignment="start"
        enableSnap
      />
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
