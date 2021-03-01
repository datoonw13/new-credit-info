import {useState} from 'react';

const useService = () => {
  const [activePackage, setActivePackage] = useState<number>(0);
  const [serviceType, setServiceType] = useState<ServiceType>('Standard');
  const [entityType, setEntityType] = useState<EntityType>('Individual');

  return {
    entityType,
    serviceType,
    setEntityType,
    activePackage,
    setServiceType,
    setActivePackage,
  };
};

export default useService;
