import moment from 'moment';
import {LocaleConfig} from 'react-native-calendars';
import {
  weekdaysShort,
  monthsShort,
  weekdays,
  months,
} from 'utils/localization/date';

export const setDateLocale = () => {
  moment.locale('ka', {
    weekdaysShort,
    monthsShort,
    weekdays,
    months,
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
