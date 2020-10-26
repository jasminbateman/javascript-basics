const negate = a => {
  return !a;
};

const both = (a, b) => {
  return Boolean(a && b);
};

const either = (a, b) => {
  return Boolean(a || b);
};

const none = (a, b) => {
  return negate(either(a || b));
};

const one = (a, b) => {
  return (!a && b) || (a && ! b);
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  
};

const isGreaterThan = (a, b) => {
  // your code here
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
};

const isOdd = a => {
  // your code here
};

const isEven = a => {
  // your code here
};

const isSquare = a => {
  // your code here
};

const startsWith = (char, string) => {
  // your code here
};

const containsVowels = string => {
  // your code here
};

const isLowerCase = string => {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
