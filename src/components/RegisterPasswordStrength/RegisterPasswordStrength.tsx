import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GRAY9, GREEN1, YELLOW} from 'theme/colors';

const RegisterPasswordStrength = ({score}) => {
  const blockArray = score ? new Array(score < 4 ? score * 3 : 9).fill(1) : [];
  return (
    <View style={styles.container}>
      {blockArray.map((el, i) => (
        <View
          key={i.toString()}
          style={{
            ...styles.block,
            backgroundColor: i < 3 ? GRAY9 : i < 6 ? YELLOW : GREEN1,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 10,
  },
  block: {
    width: 20,
    height: 5,
    backgroundColor: 'red',
    marginRight: 5,
    borderRadius: 4,
  },
});

export default RegisterPasswordStrength;
