/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text} from 'components';
import {colors} from 'theme';

const Scoring = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.scoreTabsWrapper}>
        <ScoreTab rating="E" start="0" color={colors.ratingRed} roundLeft />
        <ScoreTab rating="D" start="234" color={colors.ratingBrown} />
        <ScoreTab rating="C" start="284" color={colors.ratingYellow} />
        <ScoreTab rating="B" start="320" color={colors.ratingLightGreen} />
        <ScoreTab rating="A" start="333" end="400" color={colors.ratingGreen} roundRight />
      </View>
      <Text style={styles.scoringText}>{t('reports.scoreAndRating')}</Text>
    </View>
  );
};

const ScoreTab: ScoreTabFC = ({
  roundRight = false,
  roundLeft = false,
  rating,
  start,
  color,
  end,
}) => {
  return (
    <View style={[
      styles.scoreTabContainer,
      {backgroundColor: color},
      roundLeft && styles.scoreTabLeftRound,
      roundRight && styles.scoreTabRightRound,
      !roundRight && styles.scoreTabRightMargin,
    ]}
      >
      <Text style={styles.scoreTabRating}>{rating}</Text>

      {start && <Text style={[styles.scoreTabStartNumber, roundLeft && styles.resetLeft]}>{start}</Text>}
      {end && <Text style={styles.scoreTabEndNumber}>{end}</Text>}
    </View>
  );
};

export default Scoring;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    marginHorizontal: 15,
    backgroundColor: colors.blackOp05,
    paddingVertical: 22,
    paddingHorizontal: 15,
    borderRadius: 16,
  },
  scoreTabsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 32,
  },
  scoreTabContainer: {
    flex: 1,
    height: 12,
    position: 'relative',
  },
  scoreTabRightMargin: {
    marginRight: 1,
  },
  scoreTabRating: {
    position: 'absolute',
    top: -20,
    left: '45%',
    color: colors.blackOp5,
  },
  scoreTabStartNumber: {
    position: 'absolute',
    bottom: -20,
    left: -10,
    color: colors.blackOp5,
  },
  resetLeft: {
    left: -1,
  },
  scoreTabEndNumber: {
    position: 'absolute',
    bottom: -20,
    right: -5,
    color: colors.blackOp5,
  },
  scoreTabRightRound: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  scoreTabLeftRound: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  scoringText: {
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
  },
});
