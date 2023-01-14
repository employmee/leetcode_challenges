/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let result = digits
  if (digits[digits.length-1] + 1 < 10) {
      result[digits.length-1] = digits[digits.length-1] + 1;
      return result;
  }
  for (let i=digits.length-1; i>=0; i--) {
      if (digits[i]===9){
          firstNine = i;
          result[i] = 0;
      } else {
          result[i] = digits[i] + 1;
          return result;
      }
  }
  result.unshift(1)
  return result
};
