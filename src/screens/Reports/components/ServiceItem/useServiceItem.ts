import {useEffect, useState} from 'react';

const useServiceItem = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [price, setPrice] = useState('4.99');

  /**
   * Change price depending on switch state.
   */
  useEffect(() => {
    if (isYearly) {
      setPrice('12.88');
    } else {
      setPrice('4.99');
    }
  }, [isYearly]);

  return {
    setIsYearly,
    isYearly,
    price,
  };
};

export default useServiceItem;
