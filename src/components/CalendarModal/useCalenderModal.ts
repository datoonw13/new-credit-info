import {useState} from 'react';
import {getMaxDate} from './helpers';

const useCalendarModal = ({
  setModalVisible,
  activeDate,
  isPerson,
}: UseCalendarModalProps) => {
  const [yearsVisible, setYearsVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    activeDate ?? getMaxDate(isPerson),
  );
  const [selectedDate, setSelectedDate] = useState(
    activeDate ?? getMaxDate(isPerson),
  );

  /**
   * Close modal.
   */
  const closeModal = () => {
    setSelectedDate(new Date());
    setModalVisible(false);
  };

  /**
   * Choose year and close year modal.
   */
  const chooseYear = (year: number) => {
    setSelectedDate(new Date(selectedDate.setFullYear(year)));
    setYearsVisible(false);
  };

  return {
    getMaxDate,
    closeModal,
    chooseYear,
    currentDate,
    selectedDate,
    yearsVisible,
    setCurrentDate,
    setSelectedDate,
    setYearsVisible,
  };
};

export default useCalendarModal;
