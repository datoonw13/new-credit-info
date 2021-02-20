import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TouchId from 'react-native-touch-id';
import Image from 'assets/svg/georgian-flag.svg';
const Test = () => {
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

  return (
    <>
      <SafeAreaView />
      <Text>test</Text>
      <Image
        width={200}
        height={200}
        style={{
          backgroundColor: 'gold',
          position: 'absolute',
          left: 100,
          top: 100,
        }}
      />
    </>
  );
};

export default Test;
