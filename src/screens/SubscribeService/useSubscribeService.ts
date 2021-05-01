import {useState, createRef, useEffect} from 'react';

const useSubscribeService = () => {
  const [serviceType, setServiceType] = useState<ServiceType>('STANDARD');
  const choosePaymentTypeModalRef = createRef<any>();

  const onSubscribe = () => choosePaymentTypeModalRef.current?.open();

  useEffect(() => {
    setTimeout(() => choosePaymentTypeModalRef.current?.open(), 1000);
  }, []);

  return {serviceType, setServiceType, onSubscribe, choosePaymentTypeModalRef};
};

export default useSubscribeService;
