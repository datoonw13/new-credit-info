import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CheckBox, Divider} from 'react-native-elements';
import * as colors from 'theme/colors';
import {Text, Button} from 'components';
import useAcceptTerms from './useAcceptTerms';
import {useTranslation} from 'react-i18next';

const AcceptTerms: AcceptTermsFC = ({lastStep}) => {
  const {onSubmit, checked, setChecked} = useAcceptTerms({lastStep});
  const {t} = useTranslation();
  return (
    <>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.contractContainer}>
          {contract.map(({id, heading, description}) => {
            return (
              <View key={id} style={styles.paragraph}>
                <Text style={styles.heading} dontTranslate capsBold>
                  {heading}
                </Text>
                <Text style={styles.description} dontTranslate>
                  {description}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <CheckBox
        center
        title={t('ACCEPT_TERMS')}
        containerStyle={styles.container}
        iconType="fontisto"
        checkedIcon="checkbox-active"
        uncheckedIcon="checkbox-passive"
        uncheckedColor={colors.GRAY8}
        checkedColor={colors.crimson}
        checked={checked}
        onPress={lastStep === 5 ? () => setChecked(!checked) : undefined}
      />
      <Divider />
      <Button
        text={'CONTINUE'}
        disabled={!checked}
        onPress={() => onSubmit()}
      />
    </>
  );
};

export default AcceptTerms;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  contractContainer: {
    backgroundColor: colors.blackOp05,
    padding: 10,
    borderColor: colors.blackOp1,
    borderWidth: 1,
    borderRadius: 12,
  },
  paragraph: {
    marginBottom: 20,
  },
  heading: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
  },
  description: {
    lineHeight: 25,
    fontSize: 13,
  },
});

const contract = [
  {
    id: 1,
    heading: '1. ხელშეკრულების საგანი',
    description:
      'კომპანია შესაძლებლობას აძლევს მომხმარებელს ისარგებლოს კომპანიის სერვისით - „ჩემი კრედიტინფო“, რის საფუძველზეც მომხმარებელს ენიჭება უფლება გაეცნოს კომპანიის მონაცემთა ბაზაში მის შესახებ არსებულ ინფორმაციას ინტერნეტის მეშვეობით წინამდებარე ხელშეკრულების პირობების შესაბამისად.',
  },
  {
    id: 2,
    heading: '2. მხარეთა ვალდებულებები',
    description:
      'სერვისით „ჩემი კრედიტინფო“ სარგებლობის უზრუნველყოფის მიზნით კომპანია ვალდებულია მიანიჭოს მომხმარებელს შესაბამისი სახელი და პაროლი და დაარეგისტრიროს იგი სერვისით „ჩემი კრედიტინფო“ სარგებლობის',
  },
];
