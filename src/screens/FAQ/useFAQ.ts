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

        setFaqs(FAQs);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => console.log(faqs), [faqs]);

  return {
    faqs,
    activeFAQCategoryItem,
    setActiveFAQCategoryItem,
  };
};

export default useFAQ;
