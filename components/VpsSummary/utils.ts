export const moneyFormat = (number: number): string => {
  return parseFloat(number.toString()).toFixed(2);
};
