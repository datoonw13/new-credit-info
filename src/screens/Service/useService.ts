import {useState} from 'react';

const useService = () => {
  const [serviceType, setServiceType] = useState<ServiceType>('Standard');
  const [entityType, setEntityType] = useState<EntityType>('Individual');

  return {
    entityType,
    serviceType,
    setEntityType,
    setServiceType,
  };
};

export default useService;
