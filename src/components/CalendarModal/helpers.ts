/**
 * Get maximum date user can choose.
 */
export const getMaxDate = (isPerson: boolean) => {
  const personDateTimestamp = new Date().setFullYear(
    new Date().getFullYear() - 18,
  );
  return isPerson ? new Date(personDateTimestamp) : new Date();
};
