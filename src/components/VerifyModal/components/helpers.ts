/**
 * Filter input.
 */
export const filterInput = (text: string) => {
  const character = text.slice(0, 1);

  const isNumber = !!character.match(/^1|2|3|4|5|6|7|8|9|0$/);

  return isNumber ? character : '';
};
