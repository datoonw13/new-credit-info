import React from 'react';
import {TouchableOpacity, StyleSheet, Animated, View} from 'react-native';
import Text from 'components/Text';
import {colors} from 'theme';
import useFAQItem from './useFAQItem';
import ItemArrow from '../ItemArrow';

const FAQItem: FAQItemFC = ({
  id,
  answer,
  question,
  activeFAQItem,
  setActiveFAQItem,
}) => {
  const {toggleFAQItem, open} = useFAQItem({
    id,
    activeFAQItem,
    setActiveFAQItem,
  });

  return (
    <TouchableOpacity style={styles.container} onPress={toggleFAQItem}>
      <View
        style={[
          styles.questionContainer,
          {backgroundColor: open ? colors.blackOp2 : colors.blackOp1},
        ]}>
        <Text style={[styles.questionText, open && styles.bold]}>
          {question}
        </Text>
        <ItemArrow open={open} />
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
    backgroundColor: colors.blackOp05,
    borderRadius: 16,
    marginTop: 8,
  },
  questionContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 16,
    display: 'flex',
    fontSize: 14,
  },
  questionText: {
    flexWrap: 'wrap',
    width: '90%',
  },
  bold: {
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
    paddingHorizontal: 11,
    paddingVertical: 11,
  },
});
