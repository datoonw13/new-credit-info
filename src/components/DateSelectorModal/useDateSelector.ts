import {useEffect, useMemo, useState} from 'react';
import {getAppropriateDate} from './helpers';
const useDateSelector = ({isPerson, activeDate, setDate}: UseDateSelector) => {
  const date = useMemo(
    () => (activeDate ? activeDate : getAppropriateDate(isPerson)),
    [activeDate, isPerson],
  );

  const [dateType, setDateType] = useState<SelectedDate>('year');
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [day, setDay] = useState(date.getDate());

  /**
   * Update date.
   */
  useEffect(() => {
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    setDay(date.getDate());
  }, [date]);

  /**
   * Update parent date state.
   */
  const updateDate = () => {
    const newDate = new Date(year, month - 1, day);
    setDate(newDate);
  };

  return {
    day,
    year,
    month,
    setDay,
    setYear,
    dateType,
    setMonth,
    updateDate,
    setDateType,
  };
};

export default useDateSelector;
