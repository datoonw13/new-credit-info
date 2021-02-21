import moment from 'moment';
import {LocaleConfig} from 'react-native-calendars';

const weekdays = [
  'კვირა',
  'ორშაბათი',
  'სამშაბათი',
  'ოთხშაბათი',
  'ხუთშაბათი',
  'პარასკევი',
  'შაბათი',
];

const weekdaysShort = ['კვრ', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'];

const months = [
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

const monthsShort = [
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

export const setDateLocale = () => {
  moment.locale('ka', {
    months,
    monthsShort,
    weekdays,
    weekdaysShort,
  });

  LocaleConfig.locales.ka = {
    monthNamesShort: monthsShort,
    dayNamesShort: weekdaysShort,
    monthNames: months,
    dayNames: weekdays,
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
