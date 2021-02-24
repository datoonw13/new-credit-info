import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
// import TouchId from 'react-native-touch-id';
import {SendAgain} from 'components';

const Test = () => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <SendAgain phoneNumber="591935080" />
      </View>
    </>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginHorizontal: 20,
  },
});

// (async () => {
//   const supported = await TouchId.isSupported();
//   console.log({supported});

//   try {
//     const authed = await TouchId.authenticate('რამე ისეთი ტექსტი', {
//       cancelText: 'this is a cancel text',
//       imageColor: 'red',
//       imageErrorColor: 'pink',
//       sensorDescription: 'this is a sensor description',
//       sensorErrorDescription: 'this is a sensor error description',
//       title: 'this is a title',
//       unifiedErrors: true,
//     });

//     console.log(authed);
//   } catch (e) {
//     console.dir(e);
//   }
// })();
