import {useState} from 'react';
import {alertInfo} from 'utils/dropdownAlert';

const useSubscribeService = () => {
  const [serviceType, setServiceType] = useState<ServiceType>('STANDARD');

  const onSubscribe = () => alertInfo('', 'Not yet implemented!');

  return {serviceType, setServiceType, onSubscribe};
};

export default useSubscribeService;
