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
import {BLACK, GRAY2, RED2, WHITE} from 'theme/colors';
import {FIRAGO_REGULAR} from 'theme/fonts';

const CountrySelectModal = ({
  isVisible,
  setModalVisible,
  setCountry,
  activeCountry,
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
                    backgroundColor: activeCountry.id === el.id ? RED2 : WHITE,
                  }}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: activeCountry.id === el.id ? WHITE : BLACK,
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
    borderColor: GRAY2,
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
