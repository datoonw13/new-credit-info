import {useState} from 'react';
import * as services from 'services';
import {alertError} from 'utils/dropdownAlert';
import {showSentOTPModal} from 'utils/modal';

const useIdentity = ({setStep, username}: UseIdentity) => {
  const [usernameEntered, setUsernameEntered] = useState(false);
  const [code, setCode] = useState('');

  /**
   * Set username entered. and send One
   * time password.
   */
  const onUsernameEntered = async () => {
    await sendOTP();
    setUsernameEntered(true);
  };

  /**
   * Send one-time-password.
   */
  const sendOTP = async () => {
    try {
      await services.forgotPasswordSendOTP(username);
      showSentOTPModal();
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * send one-time-password if username is not
   * entered, and if so, go verify one-time-password.
   */
  const onPress = async () => {
    if (!usernameEntered) {
      onUsernameEntered();
    } else {
      try {
        await services.forgotPasswordCheckOTP(username, code);
        setStep('Reset');
      } catch (e) {
        console.dir(e);
        if (e.response.status === 403) {
          alertError(
            'dropdownAlert.invalidCodeTitle',
            'dropdownAlert.invalidCode',
          );
          setCode('');
        }
      }
    }
  };

  return {
    usernameEntered,
    setCode,
    sendOTP,
    onPress,
  };
};

export default useIdentity;
