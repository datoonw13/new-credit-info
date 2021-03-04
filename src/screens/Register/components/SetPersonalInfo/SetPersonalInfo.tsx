import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {Controller} from 'react-hook-form';
import {Input, Button} from 'components';
import useSetPersonalInfo from './useSetPersonalInfo';
import {RegistrationSteps} from '../RegistrationStep/enum';
import {rules} from 'utils/form';

const SetPersonalInfo: SetPersonalInfoFC = ({
  lastStep,
  registerData,
  isPerson,
}) => {
  const {
    repeatUserNameErrorMsg,
    repeatUserNameLabel,
    firstNameErrorMsg,
    usernameErrorMsg,
    lastNameErrorMsg,
    firstNameLabel,
    userNameLabel,
    lastNameLabel,
    onSubmitPress,
    control,
    watch,
  } = useSetPersonalInfo({
    lastStep,
    registerData,
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Controller
          name="userName"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              label={userNameLabel}
              editable={lastStep === RegistrationSteps.SetPersonalInfo}
              keyboardType="number-pad"
              onChangeText={(val) => onChange(val)}
              onBlur={onBlur}
              value={value}
              maxLength={isPerson ? 11 : 9}
              errorMessage={usernameErrorMsg}
              labelOnBorderToo
            />
          )}
          rules={rules.userName(!!isPerson)}
        />
        <Divider />
        <Controller
          name="repeatUserName"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              label={repeatUserNameLabel}
              editable={lastStep === RegistrationSteps.SetPersonalInfo}
              keyboardType="number-pad"
              onChangeText={(val) => onChange(val)}
              onBlur={onBlur}
              value={value}
              maxLength={isPerson ? 11 : 9}
              errorMessage={repeatUserNameErrorMsg}
            />
          )}
          rules={rules.repeatUserName(watch)}
        />
        <Divider />
        <Controller
          name="firstName"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              label={firstNameLabel}
              editable={lastStep === 2}
              onChangeText={(val) => onChange(val)}
              onBlur={onBlur}
              value={value}
              maxLength={35}
              errorMessage={firstNameErrorMsg}
              autoCorrect={false}
            />
          )}
          rules={rules.nameField()}
        />
        <Divider />
        {isPerson && (
          <Controller
            name="lastName"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label={lastNameLabel}
                editable={lastStep === 2}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={lastNameErrorMsg}
                autoCorrect={false}
              />
            )}
            rules={rules.nameField()}
          />
        )}
      </ScrollView>
      <Divider />
      <Button text="continue" onPress={onSubmitPress} />
    </View>
  );
};
export default SetPersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  scrollViewContainer: {
    paddingTop: 10,
  },
});
