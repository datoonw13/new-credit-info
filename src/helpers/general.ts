/**
 * Delay main thred execution for
 * x seconds.
 */
export const delay = (second: number = 0.1) =>
  new Promise((resolve) => setTimeout(() => resolve(true), second * 1000));
