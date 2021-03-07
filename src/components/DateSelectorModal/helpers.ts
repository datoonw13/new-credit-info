const now = new Date();

/**
 * calculate date.
 */
export const getAppropriateDate = (isPerson: boolean) =>
  isPerson ? new Date(now.setFullYear(now.getFullYear() - 18)) : new Date();
