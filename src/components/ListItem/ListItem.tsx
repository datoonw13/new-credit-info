import React, {useState} from 'react';
import {StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import Text from 'components/Text';
import {ListItemFC} from './types';

const ListItem: ListItemFC = ({
  switcher = false,
  onPress,
  title,
  color,
  Icon,
}) => {
  const [val, setVal] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!onPress}
      onPress={() => onPress && onPress()}>
      <View style={styles.innerContainer}>
        <View style={[styles.iconWrapper, {backgroundColor: color}]}>
          <Icon />
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
      {switcher && <Switch value={val} onValueChange={setVal} />}
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 38,
    width: 38,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    marginRight: 15,
  },
  text: {
    letterSpacing: 0.2,
  },
});
