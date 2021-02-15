import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CheckBox, Divider} from 'react-native-elements';
import {translate} from '../../services/localizeService';
import {acceptAgreementAction, setRegisterSelectedStepAction,} from '../../store/ducks/authDuck';
import {useDispatch} from 'react-redux';
import Button from '../shared/Button';
import * as colors from '../../theme/colors';
import Text from '../shared/Text';
import notificationService from '../../services/notificationService';

const RegisterStep5 = ({lastStep}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(lastStep !== 5);

  const onSubmit = () => {
    if (!checked) {
      notificationService.notify(
        'error',
        'შეცდომ!',
        'გთხოვთ დაეთანხმოთ წესებს და პირობებს',
      );
      return;
    }
    if (lastStep === 5) {
      dispatch(acceptAgreementAction());
    }
    dispatch(setRegisterSelectedStepAction(6));
  };

  return (
    <>
      <ScrollView style={{flex: 1}}>
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
        title={translate('ACCEPT_TERMS')}
        iconLeft
        containerStyle={styles.container}
        iconType="fontisto"
        checkedIcon="checkbox-active"
        uncheckedIcon="checkbox-passive"
        uncheckedColor={colors.GRAY8}
        checkedColor={colors.RED2}
        checked={checked}
        onPress={lastStep === 5 ? () => setChecked(!checked) : null}
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

export default RegisterStep5;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  contractContainer: {
    backgroundColor: colors.whiteGrey,
    padding: 10,
    borderColor: colors.lightestGrey,
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
