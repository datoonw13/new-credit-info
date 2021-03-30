import {useEffect, useState} from 'react';
import {getPasscode, removePasscode} from 'utils/storage';

const useSecurity = () => {
  const [passcodeSwitchValue, setPasscodeSwitchValue] = useState(false);

  /**
   * Set passcode switch value to true
   * if there is passcode saved in async storage.
   */
  useEffect(() => {
    (async () => {
      const passcode = await getPasscode();
      if (passcode !== null) {
        setPasscodeSwitchValue(true);
      }
    })();
  }, []);

  /**
   * On passcode off toggle, remove passcode.
   */
  const onPasscodeSwitchOff = () => {
    removePasscode();
    setPasscodeSwitchValue(false);
  };

  return {
    passcodeSwitchValue,
    onPasscodeSwitchOff,
  };
};

export default useSecurity;
