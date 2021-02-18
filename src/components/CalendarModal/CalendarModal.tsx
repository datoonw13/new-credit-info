import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import * as colors from 'theme/colors';
import Button from 'components/Button';

const CalendarModal: CalendarModalFC = ({
  setModalVisible,
  isVisible,
  activeDate,
  isPerson,
  setDate,
}) => {
  const [selectedDate, setSelectedDate] = React.useState(
    activeDate ? activeDate : null,
  );

  const closeModal = () => {
    setSelectedDate(activeDate);
    setModalVisible(false);
  };

  const getMaxDate = () => {
    return isPerson
      ? new Date().setFullYear(new Date().getFullYear() - 18)
      : new Date();
  };

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
            // Initially visible month. Default = Date()
            current={activeDate ? activeDate : getMaxDate()}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={getMaxDate()}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
            }}
            markedDates={{[selectedDate]: {selected: true}}}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'MMMM yyyy'}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
            theme={{
              dayTextColor: colors.black,
              monthTextColor: colors.black,
              indicatorColor: colors.black,
              arrowColor: colors.black,
              todayTextColor: colors.black,
              selectedDayBackgroundColor: colors.RED2,
              selectedDayTextColor: colors.white,
            }}
          />
          <Button text={'SAVE2'} onPress={() => setDate(selectedDate)} />
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
