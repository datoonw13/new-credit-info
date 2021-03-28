/* eslint-disable no-extend-native */

/**
 * Define array has method.
 */
Array.prototype.has = function (needle) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === needle) {
      return true;
    }
  }

  return false;
};
