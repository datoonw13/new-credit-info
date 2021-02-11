import React from 'react';
import {StyleSheet} from 'react-native';
import {GRAY8, RED2} from '../../theme/colors';
import AuthSubmitButton from './AuthSubmitButton';
import {CheckBox, Divider} from 'react-native-elements';
import {translate} from '../../services/localizeService';
import {
  acceptAgreementAction,
  setRegisterSelectedStepAction,
} from '../../store/ducks/authDuck';
import {useDispatch} from 'react-redux';

const RegisterStep4 = ({lastStep}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(lastStep !== 4);

  const onSubmit = () => {
    if (lastStep === 4) {
      dispatch(acceptAgreementAction());
    }
    dispatch(setRegisterSelectedStepAction(5));
  };

  return (
    <>
      <CheckBox
        center
        title={translate('ACCEPT_TERMS')}
        iconLeft
        containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
        iconType="fontisto"
        checkedIcon="checkbox-active"
        uncheckedIcon="checkbox-passive"
        uncheckedColor={GRAY8}
        checkedColor={RED2}
        checked={checked}
        onPress={lastStep === 4 ? () => setChecked(!checked) : null}
      />
      <Divider />
      <AuthSubmitButton
        text={'CONTINUE'}
        disabled={!checked}
        onPress={() => onSubmit()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 170,
  },
});

export default RegisterStep4;
