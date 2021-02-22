import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {selectRegistration} from 'store/select';
import {colors} from 'theme';
import {setRegisterSelectedStepAction} from 'store/registration/actions';
import {useCallback} from 'react';

const useRegisterBottomTab = () => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const {registerLastStep, registerSelectedStep} = useSelector(
    selectRegistration,
  );

  /**
   * If step is already visited,
   * turn it to green.
   */
  const hasVisited = useCallback(
    (index: number) => {
      return index <= registerLastStep && index !== registerSelectedStep
        ? styles.visited
        : {};
    },
    [registerSelectedStep, registerLastStep],
  );

  /**
   * If we are currently visiting
   * this step, make it lengthy
   * and crimson.
   */
  const currentlyVisiting = useCallback(
    (index: number) => {
      return index === registerSelectedStep ? styles.currentlyVisiting : {};
    },
    [registerSelectedStep],
  );

  /**
   * Go to previous step. If we are
   * on first step then go previous screen.
   */
  const onBackPress = useCallback(
    () =>
      registerSelectedStep === 1
        ? goBack()
        : dispatch(setRegisterSelectedStepAction(registerSelectedStep - 1)),
    [dispatch, goBack, registerSelectedStep],
  );

  return {
    currentlyVisiting,
    onBackPress,
    hasVisited,
  };
};

export default useRegisterBottomTab;

const styles = StyleSheet.create({
  visited: {
    backgroundColor: colors.secondGreen,
  },
  currentlyVisiting: {
    width: 15,
    backgroundColor: colors.crimson,
  },
});
