import {useCallback, useEffect, useState} from 'react';
import * as services from 'services';
import {formatServices} from './helpers';

const useService = () => {
  const [activePackage, setActivePackage] = useState<number>(0);
  const [serviceType, setServiceType] = useState<ServiceType>('STANDARD');
  const [entityType, setEntityType] = useState<EntityType>('PERSON');
  const [personServices, setPersonServices] = useState<Services>();
  const [companyServices, setCompanyServices] = useState<Services>();
  const [activeServices, setActiveServices] = useState<Services>();

  /**
   * Fetch services from back-end.
   */
  useEffect(() => {
    (async () => {
      try {
        const [
          fetchedPersonServices,
          fetchedCompanyServices,
        ] = await Promise.all([
          services.getServices('PERSON'),
          services.getServices('COMPANY'),
        ]);

        const formattedPersonServices = formatServices(fetchedPersonServices);
        const formattedCompanyServices = formatServices(fetchedCompanyServices);

        setPersonServices(formattedPersonServices);
        setCompanyServices(formattedCompanyServices);
      } catch (e) {}
    })();
  }, []);

  /**
   * Filter services based on service type
   * in order to show appropriate service(standard/premium)
   * on users screen.
   */
  useEffect(() => {
    const chosenService =
      entityType === 'PERSON' ? personServices : companyServices;

    const filteredServiceByType = chosenService?.filter(
      ({organizationalProductType}) =>
        serviceType === organizationalProductType,
    );

    setActiveServices(filteredServiceByType);
  }, [personServices, companyServices, serviceType, entityType]);

  /**
   * change service type and reset
   * active package.
   */
  const onServiceTypeChange = useCallback((type: ServiceType) => {
    setServiceType(type);
    setActivePackage(0);
  }, []);

  return {
    entityType,
    serviceType,
    setEntityType,
    activePackage,
    activeServices,
    setActivePackage,
    onServiceTypeChange,
  };
};

export default useService;
