import {useState, createRef} from 'react';

const useSubscribeService = () => {
  const [serviceType, setServiceType] = useState<ServiceType>('STANDARD');
  const choosePaymentTypeModalRef = createRef<any>();

  const onSubscribe = () => choosePaymentTypeModalRef.current?.open();

  return {serviceType, setServiceType, onSubscribe, choosePaymentTypeModalRef};
};

export default useSubscribeService;
