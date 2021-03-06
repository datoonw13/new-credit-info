const currentYear = new Date().getFullYear();

const yearsTillNow = Array.from(Array(currentYear).keys());

/**
 * Choosable years.
 */
export const choosableYears = yearsTillNow
  .slice(1930, currentYear - 18)
  .reverse();
