import React, {useCallback} from 'react';
import Modal from 'react-native-modal';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Header} from './components';
import * as colors from 'theme/colors';
import {FIRAGO_REGULAR} from 'theme/fonts';
import * as SVG from 'assets/svg';
import Divider from 'components/Divider';
import {config} from 'utils';

const Select: SelectFC = ({
  setActiveElement,
  keyExtractor,
  valueExtractor,
  setSelectVisible,
  activeElement,
  visible,
  data,
  title,
}) => {
  const activeElementKey = keyExtractor(activeElement);

  const handleClose = useCallback(() => setSelectVisible(false), [
    setSelectVisible,
  ]);

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      isVisible={visible}
      propagateSwipe={true}
      onBackdropPress={handleClose}
      style={styles.modal}>
      <View style={styles.modalContent}>
        <Header title={title} visible={!!title} />
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={({item}) => {
            console.log(item);
            const key = keyExtractor(item);
            const value = valueExtractor(item);

            return (
              <TouchableOpacity
                onPress={() => setActiveElement(item)}
                style={{
                  ...styles.box,
                  backgroundColor:
                    activeElementKey === key ? colors.crimsonOp4 : colors.white,
                }}>
                <Text
                  style={{
                    ...styles.boxText,
                    color:
                      activeElementKey === key ? colors.white : colors.black,
                  }}>
                  {value}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <Divider width="100%" />
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <SVG.WhiteTick />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Select;

const styles = StyleSheet.create({
  modal: {
    marginVertical: config.mobileHeight * 0.25,
    marginHorizontal: config.mobileWidth * 0.1,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 20,
  },
  box: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 18,
    borderRadius: 26,
    marginVertical: 10,
  },
  boxText: {
    fontFamily: FIRAGO_REGULAR,
    fontSize: 16,
  },
  closeButton: {
    width: 32,
    height: 32,
    backgroundColor: colors.crimsonOp3,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
