import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme';
import {SwitchServiceButton} from './components';
import {ServiceSwitcherFC} from './types';

const ServiceSwitcher: ServiceSwitcherFC = ({style, serviceType, onPress}) => {
  return (
    <View style={[styles.container, style]}>
      <SwitchServiceButton
        title="serviceScreen.standard"
        active={serviceType === 'Standard'}
        type="Standard"
        onPress={onPress}
      />
      <SwitchServiceButton
        title="serviceScreen.premium"
        active={serviceType === 'Premium'}
        type="Premium"
        onPress={onPress}
      />
    </View>
  );
};

export default ServiceSwitcher;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.strangeBlueOp1,
    paddingVertical: 8,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
