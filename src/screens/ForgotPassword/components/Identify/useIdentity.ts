import {useState} from 'react';
import * as services from 'services';

const useIdentity = () => {
  const [usernameEntered, setUsernameEntered] = useState(false);

  /**
   * Set username entered. and send One
   * time password.
   */
  const onUsernameEntered = async (username: string) => {
    try {
      const response = await services.forgotPasswordSendOTP(username);
      console.log({response});
      setUsernameEntered(true);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * send one-time-password if username is not
   * entered, and if so, go verify one-time-password.
   */
  const onPress = ({username}: IdentityFormData) => {
    if (!usernameEntered) {
      onUsernameEntered(username);
    }
  };

  return {
    onPress,
    usernameEntered,
  };
};

export default useIdentity;
