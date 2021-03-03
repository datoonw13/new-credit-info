import {useCallback, useEffect, useState} from 'react';

const useFAQItem = ({activeFAQItem, setActiveFAQItem, id}: PassedProps) => {
  const [open, setOpen] = useState(false);

  const toggleFAQItem = useCallback(() => {
    setOpen(!open);
    setActiveFAQItem(id);
  }, [open, id, setActiveFAQItem]);

  /**
   * Manage FAQItem closing when
   * other item is selected
   **/
  useEffect(() => {
    if (activeFAQItem !== id) {
      setTimeout(() => setOpen(false), 300);
    }
  }, [activeFAQItem, id]);

  return {
    open,
    toggleFAQItem,
  };
};

export default useFAQItem;
