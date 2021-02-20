import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {BaseHeader, FAQItem} from 'components';
import {data} from './config';

const FAQ = () => {
  const [activeFAQItem, setActiveFAQItem] = useState<null | number>(null);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <BaseHeader title="faq" />
      <ScrollView style={styles.scrollViewContainer}>
        {data.map(({id, answer, question}) => (
          <FAQItem
            key={id}
            id={id}
            answer={answer}
            question={question}
            setActiveFAQItem={setActiveFAQItem}
            activeFAQItem={activeFAQItem}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  safeAreaContainer: {},
  scrollViewContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
