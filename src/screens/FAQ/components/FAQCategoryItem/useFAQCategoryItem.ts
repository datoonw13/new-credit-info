import {useCallback, useEffect, useState} from 'react';

const useFAQCategoryItem = ({
  id,
  activeFAQCategoryItem,
  setActiveFAQCategoryItem,
}: FAQCategoryItemPassedProps) => {
  const [open, setOpen] = useState(false);

  const toggleFAQItem = useCallback(() => {
    setOpen(!open);
    setActiveFAQCategoryItem(id);
  }, [open, id, setActiveFAQCategoryItem]);

  /**
   * Manage FAQItem closing when
   * other item is selected
   **/
  useEffect(() => {
    if (activeFAQCategoryItem !== id) {
      setTimeout(() => setOpen(false), 300);
    }
  }, [activeFAQCategoryItem, id]);

  return {
    open,
    toggleFAQItem,
  };
};

export default useFAQCategoryItem;
