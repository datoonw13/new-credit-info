import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from 'components/Button';
import Text from 'components/Text';
import {Tab, ListSelector} from './components';
import {useTranslation} from 'react-i18next';
import useDateSelector from './useDateSelector';
import {colors} from 'theme';
import references from 'utils/references';
import {choosableYears, choosableMonths, choosableDays} from './config';

const DateSelector = () => {
  const {t} = useTranslation();
  const {
    year,
    month,
    day,
    dateType,
    setDateType,
    setYear,
    setMonth,
    setDay,
  } = useDateSelector();

  const formattedMonth = month > 9 ? month : '0' + month;
  const formattedDay = day > 9 ? day : '0' + day;
  const formattedDate = `${year} - ${formattedMonth} - ${formattedDay}`;

  return (
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
          data={choosableYears}
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
        onPress={references.modal?.close}
        text="close"
      />
    </View>
  );
};

export default <DateSelector />;

const styles = StyleSheet.create({
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
