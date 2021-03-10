/**
 * Divide monthly services and yearly services.
 */
export const formatServices = (services: Services): Services => {
  return [
    ...services
      .filter((service) => {
        return !!service.monthlyPrice;
      })
      .map((service) => {
        delete service.yearlyPrice;

        return service;
      }),
    ...services
      .filter((service) => {
        return !!service.yearlyPrice;
      })
      .map((service) => {
        delete service.monthlyPrice;

        return service;
      }),
  ];
};
