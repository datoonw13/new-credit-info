export const weekdays = [
  'კვირა',
  'ორშაბათი',
  'სამშაბათი',
  'ოთხშაბათი',
  'ხუთშაბათი',
  'პარასკევი',
  'შაბათი',
];
export const weekdaysShort = ['კვრ', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'];
export const months = [
  'იანვარი',
  'თებერვალი',
  'მარტი',
  'აპრილი',
  'მაისი',
  'ივნისი',
  'ივლისი',
  'აგვისტო',
  'სექტემბერი',
  'ოქტომბერი',
  'ნოემბერი',
  'დეკემბერი',
];
export const monthsShort = [
  'იან',
  'თებ',
  'მარ',
  'აპრ',
  'მაი',
  'ივნ',
  'ივლ',
  'აგვ',
  'სექ',
  'ოქტ',
  'ნოე',
  'დეკ',
];

import moment from 'moment';
import {LocaleConfig} from 'react-native-calendars';

export const setDateLocale = () => {
  moment.locale('ka', {
    months,
    monthsShort,
    weekdays,
    weekdaysShort,
  });

  LocaleConfig.locales.ka = {
    monthNames: months,
    monthNamesShort: monthsShort,
    dayNames: weekdays,
    dayNamesShort: weekdaysShort,
  };
  LocaleConfig.defaultLocale = 'ka';
};

export const parseDateFromServer = (dateTime: string) => {
  const date = dateTime.split(' ')[0].split('-');
  const time = dateTime.split(' ')[1].split(':');
  const formattedDate = new Date(
    date[0],
    date[1],
    date[2],
    time[0],
    time[1],
    time[2],
  );
  return moment(formattedDate).format('DD MMM HH:mm');
};
