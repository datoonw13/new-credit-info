import {useEffect, useState} from 'react';
import * as services from 'services';

const useFAQ = () => {
  const [activeFAQCategoryItem, setActiveFAQCategoryItem] = useState<
    null | number
  >(null);
  const [faqs, setFaqs] = useState<CustomFAQ[]>([]);

  /**
   * Get FAQ categories.
   */
  useEffect(() => {
    (async () => {
      try {
        const FAQCategories = await services.getFAQCategories();
        const FAQs: CustomFAQ[] = [];

        FAQCategories.forEach(async (category) => {
          const {id} = category;
          const fetchedFAQs = await services.getFAQs(id);
          FAQs.push({
            ...category,
            records: fetchedFAQs,
          });
        });

        setTimeout(() => setFaqs(FAQs), 1000);
      } catch (e) {}
    })();
  }, []);

  return {
    faqs,
    activeFAQCategoryItem,
    setActiveFAQCategoryItem,
  };
};

export default useFAQ;
