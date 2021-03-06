const currentYear = new Date().getFullYear();

const yearsTillNow = Array.from(Array(currentYear).keys());

/**
 * Choosable years.
 */
export const choosableYears = yearsTillNow.slice(1930, currentYear).reverse();

/**
 * Choosable years for person.
 */
export const choosableYearsForPerson = yearsTillNow
  .slice(1930, currentYear - 18)
  .reverse();

/**
 * Get months number array.
 */
export const choosableMonths = Array.from(Array(13).keys()).slice(1);

/**
 * Get days number array.
 */
export const choosableDays = Array.from(Array(32).keys()).slice(1);
