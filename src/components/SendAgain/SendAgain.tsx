import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useTranslation} from 'react-i18next';
import Text from 'components/Text';
import {colors} from 'theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useSendAgain from './useSendAgain';

const SendAgain: SendAgainFC = ({
  sendAgainDuration = 61,
  customRequest,
  phoneNumber,
}) => {
  const {t} = useTranslation();
  const {sendOTPRequest, loading, width} = useSendAgain({
    sendAgainDuration,
    phoneNumber,
  });

  return (
    <View style={styles.sendAgainContainer}>
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => sendOTPRequest(customRequest)}
        disabled={loading === true}>
        <Animated.View
          style={[
            styles.animatedButton,
            {
              width: width.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
        <View
          style={[
            styles.button,
            {
              backgroundColor: loading ? colors.blackOp2 : colors.crimson,
            },
          ]}>
          <Text
            style={[
              styles.buttonText,
              {
                color: (width.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#000000', '#FFFFFF'],
                }) as unknown) as string,
              },
            ]}
            animated>
            {t('registration.sendAgain')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SendAgain;

const styles = StyleSheet.create({
  sendAgainContainer: {
    backgroundColor: colors.blackOp05,
    width: '80%',
    alignSelf: 'center',
    height: 60,
    marginTop: -1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    position: 'relative',
  },
  buttonWrapper: {
    position: 'relative',
  },
  animatedButton: {
    backgroundColor: colors.crimson,
    position: 'absolute',
    width: 30,
    height: '100%',
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
});
