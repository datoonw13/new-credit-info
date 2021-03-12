/**
 * Format date object.
 */
export const formateDate = (date: Date) => {
  const year = date.getFullYear();
  const month = formatDateNumber(date.getMonth() + 1);
  const day = formatDateNumber(date.getDate());

  return `${day}/${month}/${year}`;
};

/**
 * format as date number.
 */
const formatDateNumber = (num: number) =>
  num > 9 ? num.toString() : `0${num}`;
