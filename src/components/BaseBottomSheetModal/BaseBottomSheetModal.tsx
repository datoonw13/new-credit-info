import React, {forwardRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Divider from 'components/Divider';
import Text from 'components/Text';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import * as SVG from 'assets/svg';

import {colors} from 'theme';
import {useTranslation} from 'react-i18next';
import useBaseBottomSheetModal from './useBaseBottomSheetModal';

const BaseBottomSheetModal = forwardRef<any, BaseBottomSheetModalProps>(
  ({children, title, modalHeight = '50%'}, ref: any) => {
    const {
      bottomSheetModalRef,
      backdropValue,
      closeModal,
    } = useBaseBottomSheetModal(ref);
    const {t} = useTranslation();
    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          snapPoints={[-1, modalHeight]}
          ref={bottomSheetModalRef}
          backdropComponent={() => (
            <BottomSheetBackdrop
              animatedIndex={backdropValue}
              animatedPosition={backdropValue}
              style={styles.backdrop}
            />
          )}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.heading}>{t(title)}</Text>
              <TouchableOpacity
                style={styles.closeIconWrapper}
                onPress={closeModal}>
                <SVG.Close />
              </TouchableOpacity>
            </View>
            <Divider width="100%" />
            {children}
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

export default BaseBottomSheetModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 21,
    paddingBottom: 34,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  closeIconWrapper: {
    backgroundColor: colors.blackOp05,
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  backdrop: {
    backgroundColor: colors.black,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
