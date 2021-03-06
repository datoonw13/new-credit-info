import {useState} from 'react';

const useDateSelector = () => {
  const date = new Date();
  const [dateType, setDateType] = useState<SelectedDate>('year');
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [day, setDay] = useState(date.getDate());

  return {
    day,
    year,
    month,
    setDay,
    setYear,
    dateType,
    setMonth,
    setDateType,
  };
};

export default useDateSelector;
