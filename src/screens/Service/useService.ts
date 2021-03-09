import {useEffect, useState} from 'react';
import * as services from 'services';

const useService = () => {
  const [activePackage, setActivePackage] = useState<number>(0);
  const [serviceType, setServiceType] = useState<ServiceType>('STANDARD');
  const [entityType, setEntityType] = useState<EntityType>('PERSON');
  const [personServices, setPersonServices] = useState<Services>();
  const [companyServices, setCompanyServices] = useState<Services>();
  const [activeServices, setActiveServices] = useState<Services>();

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

        setPersonServices(fetchedPersonServices);
        setCompanyServices(fetchedCompanyServices);
        setActiveServices(fetchedPersonServices);
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
    console.log(filteredServiceByType);
  }, [personServices, companyServices, serviceType, entityType]);

  return {
    entityType,
    serviceType,
    setEntityType,
    activePackage,
    setServiceType,
    activeServices,
    setActivePackage,
  };
};

export default useService;
