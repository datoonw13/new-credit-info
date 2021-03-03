import React from 'react';
import {TouchableOpacity, StyleSheet, Animated, View} from 'react-native';
import {Text} from 'components';
import FAQItem from '../FAQItem';
import {colors} from 'theme';
import useFAQItem from './useFAQCategoryItem';

const FAQCategoryItem: FAQCategoryItemFC = ({
  id,
  name,
  records,
  activeFAQCategoryItem,
  setActiveFAQCategoryItem,
}) => {
  const {toggleFAQItem, open} = useFAQItem({
    activeFAQCategoryItem,
    setActiveFAQCategoryItem,
    id,
  });

  return (
    <TouchableOpacity style={styles.container} onPress={toggleFAQItem}>
      <View
        style={[
          styles.questionContainer,
          {backgroundColor: open ? colors.blackOp5 : colors.blackOp1},
        ]}>
        <Text>{name}</Text>
      </View>
      <Animated.ScrollView
        style={[styles.answerContainer, open ? styles.answerMaxHeight : {}]}>
        {records.map(({id: FAQItemId, answer, question}) => (
          <FAQItem
            key={FAQItemId}
            id={FAQItemId}
            answer={answer}
            question={question}
            setActiveFAQItem={() => {}}
            activeFAQItem={null}
          />
        ))}
      </Animated.ScrollView>
    </TouchableOpacity>
  );
};

export default FAQCategoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackOp1,
    borderRadius: 16,
    marginTop: 8,
  },
  questionContainer: {
    paddingVertical: 18,
    paddingHorizontal: 18,
    backgroundColor: colors.blackOp1,
    borderRadius: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },
  answerContainer: {
    borderRadius: 16,
    fontSize: 14,
    maxHeight: 0,
  },
  answerMaxHeight: {
    maxHeight: 1000,
  },
  answerText: {
    paddingVertical: 11,
    paddingHorizontal: 11,
  },
});
