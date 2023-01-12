/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const roman = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let integer = 0;
  for(let i = 0; i < s.length; i+=1){
    // If letter before is less than letter after then it is a subtraction
      roman[s[i]] < roman[s[i+1]] ? integer -= roman[s[i]]: integer += roman[s[i]]
  }
  return integer
};
