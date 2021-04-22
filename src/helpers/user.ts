/**
 * Determine if user status is registered.
 */
export const isBeingRegistered = ({status}: DecodedJWT) =>
  status === 'REGISTERED';

/**
 * Determine if user should make transactions
 * after registration...
 */
export const shouldMakeTransaction = ({status}: DecodedJWT) =>
  status === 'VERIFIED';

/**
 * Determine if user should choose service.
 */
export const shouldSeeReports = ({status, productId}: DecodedJWT) => {
  return status === 'AUTHORIZED' && ![1, 2, 3, 4].has(productId);
};

/**
 * Determine if user should see tab navigation.
 */
export const shouldTabNavigation = ({status, productId}: DecodedJWT) => {
  return status === 'AUTHORIZED' && [1, 2, 3, 4].has(productId);
};
