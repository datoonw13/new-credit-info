import React, {useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {Calendar} from 'react-native-calendars';
import * as colors from 'theme/colors';
import Button from 'components/Button';
import Text from 'components/Text';
import useCalendarModal from './useCalenderModal';
import {theme} from './config';

const CalendarModal: CalendarModalFC = ({
  setModalVisible,
  isVisible,
  activeDate,
  isPerson,
  setDate,
}) => {
  const {
    closeModal,
    getMaxDate,
    setSelectedDate,
    selectedDate,
    currentDate,
    setCurrentDate,
  } = useCalendarModal({
    setModalVisible,
    activeDate,
    isPerson,
  });

  useEffect(() => {
    setTimeout(() => {
      setCurrentDate(new Date(new Date().setFullYear(1927)));
      calendarModal.current?.forceUpdate();
      console.log('happened');
    }, 3000);
  }, []);

  const calendarModal = useRef<Calendar>();

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      isVisible={isVisible}
      swipeDirection="down"
      propagateSwipe={true}
      onSwipeComplete={closeModal}
      style={styles.modal}>
      <View style={styles.innerContainer}>
        <View style={styles.modalContent}>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
          </View>
          <Calendar
            current={currentDate}
            maxDate={getMaxDate(isPerson)}
            onDayPress={(day) => {
              setSelectedDate(new Date(day.dateString));
            }}
            markedDates={{[selectedDate]: {selected: true}}}
            monthFormat={'MMMM yyyy'}
            firstDay={1}
            disableAllTouchEventsForDisabledDays={true}
            enableSwipeMonths={true}
            theme={theme}
            ref={calendarModal}
            renderHeader={(date) => {
              return (
                // <TouchableOpacity onPress={() => setYearsVisible(true)}>
                <TouchableOpacity>
                  <Text>{`${date.getMonth() + ' ' + date.getFullYear()}`}</Text>
                </TouchableOpacity>
              );
            }}
            pagingEnabled
            horizontal
          />
          <Button text={'save'} onPress={() => setDate(selectedDate)} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'transparent',
  },
  innerContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
  },
  dividerContainer: {
    alignItems: 'center',
  },
  divider: {
    width: 64,
    height: 5,
    backgroundColor: colors.black,
    opacity: 0.1,
    borderRadius: 100,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default CalendarModal;

/**

 */
