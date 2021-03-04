import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Platform} from 'react-native';
import {BaseHeader} from 'components';
import {FAQCategoryItem} from './components';
import useFAQ from './useFAQ';

const FAQ = () => {
  const {activeFAQCategoryItem, setActiveFAQCategoryItem, faqs} = useFAQ();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <BaseHeader title="faq" />
      <ScrollView style={styles.scrollViewContainer}>
        {faqs.map(({id, name, records}) => (
          <FAQCategoryItem
            setActiveFAQCategoryItem={setActiveFAQCategoryItem}
            activeFAQCategoryItem={activeFAQCategoryItem}
            records={records}
            name={name}
            key={id}
            id={id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  safeAreaContainer: {
    paddingTop: Platform.OS === 'android' ? 10 : 0,
  },
  scrollViewContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
