import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Slider, {Pagination} from 'react-native-snap-carousel';
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
import {showNotificationsListModal} from 'utils/modal';

const Service = () => {
  const {
    setActivePackage,
    setServiceType,
    setEntityType,
    activePackage,
    serviceType,
    entityType,
  } = useService();

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
      <Info text="serviceScreen.promote" onPress={showNotificationsListModal} />
      <Divider />
      <Pagination
        inactiveDotStyle={styles.inactiveDot}
        containerStyle={styles.pagination}
        activeDotIndex={activePackage}
        dotStyle={styles.dot}
        inactiveDotScale={1}
        dotsLength={2}
      />
      <Slider
        data={[{}, {}]}
        renderItem={() => <Package />}
        itemWidth={config.mobileWidth * 0.8}
        sliderWidth={config.mobileWidth}
        onSnapToItem={setActivePackage}
        activeSlideAlignment="start"
        callbackOffsetMargin={10}
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
  pagination: {
    alignSelf: 'flex-end',
  },
  dot: {
    width: 15,
    height: 5,
    backgroundColor: colors.crimson,
  },
  inactiveDot: {
    width: 5,
    height: 5,
    backgroundColor: colors.blackOp5,
  },
  serviceSwitcher: {
    marginHorizontal: 15,
    marginTop: 22,
    marginBottom: 12,
  },
});
