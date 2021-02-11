import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {GRAY2, GRAY3, GRAY4, WHITE} from '../../theme/colors';

const width = Dimensions.get('window').width;

const AuthHeader = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: GRAY2}} />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.levelsContainer}>
          <View style={styles.firstLevel} />
          <View style={styles.secondLevel} />
          <View style={styles.thirdLevel} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GRAY2,
    height: 192,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 207,
    height: 49,
  },
  levelsContainer: {
    height: 50,
    alignItems: 'center',
  },
  firstLevel: {
    height: 40,
    backgroundColor: GRAY4,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    position: 'absolute',
    top: 0,
    width: width - 60,
  },
  secondLevel: {
    height: 40,
    backgroundColor: GRAY3,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    position: 'absolute',
    top: 10,
    width: width - 30,
  },
  thirdLevel: {
    height: 40,
    backgroundColor: WHITE,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    position: 'absolute',
    top: 20,
    width: width,
  },
});

export default AuthHeader;
