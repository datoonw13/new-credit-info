/**
 * Parse date string.
 */
export const parseDate = (dateString: string) => {
  const splitDate = dateString.split(/\/| /);

  const day = +splitDate[0];
  const month = +splitDate[1] - 1;
  const year = +splitDate[2];

  const dateTime = splitDate[3];
  const splitDateTime = dateTime.split(':');
  const hour = +splitDateTime[0];
  const minute = +splitDateTime[1];
  const second = +splitDateTime[2];

  const freshDate = new Date();

  freshDate.setDate(day);
  freshDate.setMonth(month);
  freshDate.setFullYear(year);

  freshDate.setHours(hour);
  freshDate.setMinutes(minute);
  freshDate.setSeconds(second);

  return freshDate;
};
