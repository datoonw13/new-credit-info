import React from 'react';
import {TouchableOpacity, StyleSheet, Animated, View} from 'react-native';
import {Text} from 'components';
import FAQItem from '../FAQItem';
import ItemArrow from '../ItemArrow';
import {colors} from 'theme';
import useFAQCategoryItem from './useFAQCategoryItem';

const FAQCategoryItem: FAQCategoryItemFC = ({
  id,
  name,
  records,
  activeFAQCategoryItem,
  setActiveFAQCategoryItem,
}) => {
  const {
    toggleFAQItem,
    open,
    activeFAQItem,
    setActiveFAQItem,
  } = useFAQCategoryItem({
    activeFAQCategoryItem,
    setActiveFAQCategoryItem,
    id,
  });

  return (
    <TouchableOpacity style={styles.container} onPress={toggleFAQItem}>
      <View style={styles.categoryTitleContainer}>
        <Text style={[styles.categoryTitle, open && styles.bold]}>{name}</Text>
        <ItemArrow open={open} color={colors.crimson} />
      </View>
      <Animated.ScrollView
        style={[
          styles.categoryContainer,
          open ? styles.categoryMaxHeight : {},
        ]}>
        {records.map(({id: FAQItemId, answer, question}) => (
          <FAQItem
            key={FAQItemId}
            id={FAQItemId}
            answer={answer}
            question={question}
            setActiveFAQItem={setActiveFAQItem}
            activeFAQItem={activeFAQItem}
          />
        ))}
      </Animated.ScrollView>
    </TouchableOpacity>
  );
};

export default FAQCategoryItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginTop: 8,
  },
  categoryTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 18,
    backgroundColor: colors.crimsonOp2,
    borderRadius: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryTitle: {
    color: colors.crimson,
  },
  bold: {
    fontWeight: 'bold',
  },
  categoryContainer: {
    borderRadius: 16,
    fontSize: 14,
    maxHeight: 0,
    paddingLeft: 20,
  },
  categoryMaxHeight: {
    maxHeight: 1000,
  },
});
