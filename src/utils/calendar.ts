/**
 * Format date object.
 */
export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = formatDateNumber(date.getMonth() + 1);
  const day = formatDateNumber(date.getDate());

  return `${day}/${month}/${year}`;
};

export const reverseFormatDate = (date: string) => {
  const splitDate = date.split('/');

  const newDate = new Date();

  const dayOfMonth = +splitDate[0];
  const month = +splitDate[1] - 1;
  const year = +splitDate[2];
  newDate.setDate(dayOfMonth);
  newDate.setMonth(month);
  newDate.setFullYear(year);

  return newDate;
};

/**
 * format as date number.
 */
const formatDateNumber = (num: number) =>
  num > 9 ? num.toString() : `0${num}`;
