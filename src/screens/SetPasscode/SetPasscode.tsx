import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {BaseHeader} from 'components';
import {PasscodeInput} from './components';
import useSetPasscode from './useSetPasscode';

const SetPasscode = () => {
  const {
    onRepeatPasscodePress,
    onPasscodePress,
    valueLength,
    view,
  } = useSetPasscode();

  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader />
      {view === 'SetPasscode' && (
        <PasscodeInput
          title="security.setPasscode"
          onPasscodeChange={onPasscodePress}
          valueLength={valueLength}
        />
      )}

      {view === 'RepeatPasscode' && (
        <PasscodeInput
          onPasscodeChange={onRepeatPasscodePress}
          title="security.repeatPasscode"
          valueLength={valueLength}
        />
      )}
    </SafeAreaView>
  );
};

export default SetPasscode;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});
