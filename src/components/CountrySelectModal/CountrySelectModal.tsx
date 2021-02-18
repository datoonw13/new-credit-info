import React from 'react';
import Modal from 'react-native-modal';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as colors from 'theme/colors';
import {FIRAGO_REGULAR} from 'theme/fonts';

const CountrySelectModal: CountrySelectedModalFC = ({
  setModalVisible,
  activeCountry,
  setCountry,
  isVisible,
  countries,
}) => {
  return (
    <Modal
      hideModalContentWhileAnimating={true}
      isVisible={isVisible}
      swipeDirection="down"
      propagateSwipe={true}
      onSwipeComplete={() => setModalVisible(false)}
      style={styles.modal}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalInnerContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              {countries.map((el) => (
                <TouchableOpacity
                  key={el.id}
                  onPress={() => setCountry(el)}
                  style={{
                    ...styles.box,
                    backgroundColor:
                      activeCountry.id === el.id ? colors.RED2 : colors.white,
                  }}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color:
                        activeCountry.id === el.id
                          ? colors.white
                          : colors.black,
                    }}>
                    {el.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'transparent',
  },
  modalInnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 4,
    width: '60%',
    height: 400,
  },
  box: {
    width: '100%',
    height: 50,
    borderColor: colors.GRAY2,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingLeft: 18,
  },
  boxText: {
    fontFamily: FIRAGO_REGULAR,
    fontSize: 16,
  },
});

export default CountrySelectModal;
