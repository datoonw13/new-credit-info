import React, {createRef, useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'components';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Test = () => {
  const ref = createRef<BottomSheetModal>();

  useEffect(() => {
    ref.current?.present();
    // ref.current?.expand();
  }, [ref]);

  return (
    <BottomSheetModalProvider>
      <View style={{flex: 1}}>
        <BottomSheetModal snapPoints={['10%', '50%']} index={1} ref={ref}>
          <Text>This is a modal</Text>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Test;
