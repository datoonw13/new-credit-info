import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {FancyHeader, ServiceSwitcher, Package} from 'components';
import {Balance, ChoosePaymentTypeModal} from './components';
import useSubscribeService from './useSubscribeService';
import {colors} from 'theme';

const SubscribeService = () => {
  const {
    serviceType,
    setServiceType,
    onSubscribe,
    choosePaymentTypeModalRef,
  } = useSubscribeService();

  const service: Service = {
    organizationalProductType: 'STANDARD',
    monthlyPrice: 10,
    yearlyPrice: 94,
    actionGroups: [
      {
        id: 21,
        name: 'შეუზღუდავი წვდომა საკრედიტო ინფორმაციაზე',
      },
      {
        id: 22,
        name: 'საკრედიტო ქულა',
      },
      {
        id: 23,
        name: 'ქულის 12 თვის ისტორია',
      },
      {
        id: 24,
        name: 'საკრედიტო ქულის სიმულატორი',
      },
      {
        id: 25,
        name: 'საკრედიტო მონიტორინგი',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FancyHeader
        title="subscribeService.title"
        style={styles.header}
        hideBackButton
      />
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.scrollViewContentContainer}>
        <Balance amount="32.96" />
        <ServiceSwitcher
          style={styles.serviceSwitcher}
          serviceType={serviceType}
          onPress={setServiceType}
        />
        <Package
          onSubscribePress={onSubscribe}
          style={styles.package}
          service={service}
        />
      </ScrollView>
      <ChoosePaymentTypeModal ref={choosePaymentTypeModalRef} />
    </View>
  );
};

export default SubscribeService;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  scrollViewContainer: {
    paddingHorizontal: 15,
  },
  scrollViewContentContainer: {
    paddingBottom: 50,
  },
  header: {
    marginHorizontal: 15,
  },
  serviceSwitcher: {
    marginTop: 16,
    backgroundColor: colors.blackOp05,
  },
  package: {
    marginTop: 16,
  },
});
