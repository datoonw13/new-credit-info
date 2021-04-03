import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import Button from 'components/Button';
import Text from 'components/Text';
import {Tab, ListSelector} from './components';
import {useTranslation} from 'react-i18next';
import useDateSelector from './useDateSelector';
import {colors} from 'theme';
import {
  choosableYearsForPerson,
  choosableYears,
  choosableMonths,
  choosableDays,
} from './config';
import {config} from 'utils';

const DateSelectorModal: DateSelectorModalFC = ({
  setDateSelectorVisible,
  dateSelectorVisible,
  activeDate,
  isPerson,
  setDate,
}) => {
  const {t} = useTranslation();
  const {
    day,
    year,
    month,
    setDay,
    setYear,
    dateType,
    setMonth,
    updateDate,
    setDateType,
  } = useDateSelector({activeDate, isPerson, setDate});
  const formattedMonth = month > 9 ? month : '0' + month;
  const formattedDay = day > 9 ? day : '0' + day;
  const formattedDate = `${year} - ${formattedMonth} - ${formattedDay}`;

  return (
    <Modal
      isVisible={dateSelectorVisible}
      style={styles.modalContainer}
      onModalHide={updateDate}
      onBackdropPress={() => setDateSelectorVisible(false)}>
      <View style={styles.container}>
        <Text style={styles.heading}>{t('dates.selectDate')}</Text>
        <Text style={styles.chosenDate}>{formattedDate}</Text>
        <View style={styles.tabsWrapper}>
          <Tab
            activeDateType={dateType}
            title="dates.year"
            dateType="year"
            rounded="left"
            onPress={() => setDateType('year')}
          />
          <Tab
            activeDateType={dateType}
            title="dates.month"
            dateType="month"
            rounded="none"
            onPress={() => setDateType('month')}
          />
          <Tab
            activeDateType={dateType}
            title="dates.day"
            dateType="day"
            rounded="right"
            onPress={() => setDateType('day')}
          />
        </View>
        {dateType === 'year' && (
          <ListSelector
            onSelect={setYear}
            activeElement={year}
            data={isPerson ? choosableYearsForPerson : choosableYears}
          />
        )}
        {dateType === 'month' && (
          <ListSelector
            onSelect={setMonth}
            activeElement={month}
            data={choosableMonths}
          />
        )}
        {dateType === 'day' && (
          <ListSelector
            onSelect={setDay}
            activeElement={day}
            data={choosableDays}
          />
        )}
        <Button
          containerStyle={styles.buttonContainer}
          onPress={() => setDateSelectorVisible(false)}
          text="close"
        />
      </View>
    </Modal>
  );
};

export default DateSelectorModal;

const styles = StyleSheet.create({
  modalContainer: {
    marginVertical: config.mobileHeight * 0.2,
    marginHorizontal:
      Platform.OS === 'ios'
        ? config.mobileWidth * 0.1
        : config.mobileWidth * 0.05,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 20,
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: 16,
    marginBottom: 10,
  },
  chosenDate: {
    textTransform: 'uppercase',
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.crimsonOp2,
    borderRadius: 10,
    marginBottom: 20,
  },
  tabsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '50%',
    height: 40,
    alignSelf: 'center',
  },
});
