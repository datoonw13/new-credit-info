import React from 'react';
import {TouchableOpacity, StyleSheet, Animated, View} from 'react-native';
import Text from 'components/Text';
import {colors} from 'theme';
import useFAQItem from './useFAQItem';

const FAQItem: FAQItemFC = ({
  answer,
  question,
  setActiveFAQItem,
  activeFAQItem,
  id,
}) => {
  const {toggleFAQItem, open} = useFAQItem({
    setActiveFAQItem,
    activeFAQItem,
    id,
  });

  return (
    <TouchableOpacity style={styles.container} onPress={toggleFAQItem}>
      <View
        style={[
          styles.questionContainer,
          {backgroundColor: open ? colors.blackOp5 : colors.blackOp1},
        ]}>
        <Text>{question}</Text>
      </View>
      <Animated.ScrollView
        style={[styles.answerContainer, open ? styles.answerMaxHeight : {}]}>
        <Text style={styles.answerText}>{answer}</Text>
      </Animated.ScrollView>
    </TouchableOpacity>
  );
};

export default FAQItem;

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
