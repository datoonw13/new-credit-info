/**
 * Determine if user status is registered.
 */
export const isBeingRegistered = ({status}: DecodedJWT) =>
  status === 'REGISTERED';
