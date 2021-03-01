import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LightGreyButton, Text} from 'components';
import * as SVG from 'assets/svg';
import references from 'utils/references';
import {colors} from 'theme';

const NotificationsListModal = () => {
  const content = config.map(({id, text}) => (
    <View style={styles.notificationWrapper} key={id}>
      <SVG.GreenTick2 style={styles.notificationsIcon} />
      <Text style={styles.notificationsText} children={text} dontTranslate />
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>
          ქმედებები რომელზეც მიიღებ შეტყობინებას
        </Text>
        <View style={styles.notificationsWrapper}>{content}</View>
      </View>
      <LightGreyButton
        touchableContainer={styles.closeButton}
        onPress={references.modal?.close}
        text="close"
      />
    </View>
  );
};

export default NotificationsListModal;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 26,
    paddingHorizontal: 20,
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
  },
  notificationsWrapper: {
    marginTop: 15,
  },
  notificationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blackOp1,
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 6,
    minHeight: 52,
  },
  notificationsIcon: {
    marginRight: 8,
  },
  notificationsText: {
    flexWrap: 'wrap',
  },
  closeButton: {},
});

const config = [
  {
    id: 1,
    text: 'თქვენი საკრედიტო ისტორია გადამოწმდა რომელიმე ორგანიზაციის მიერ',
  },
  {
    id: 2,
    text: 'საკრედიტო რეპორტს დაემატა ახალი სესხი',
  },
  {
    id: 3,
    text: 'დაიხურა სესხი',
  },
  {
    id: 4,
    text: 'დაიფარა სესხის ვადაგადაცილებული თანხა',
  },
  {
    id: 5,
    text: 'სესხის გახდა ვადაგადაცილებული',
  },
  {
    id: 6,
    text: 'შეიცვალა სესხის ნაშთი',
  },
];
