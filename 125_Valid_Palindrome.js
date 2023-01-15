/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let num = s.length;
  let firstPointer = 0;
  let secondPointer = s.length-1;
  while (num > 1) {
      if (!(/[a-zA-Z0-9]/).test(s[firstPointer])) {
          firstPointer += 1;
          num -= 1;
          continue;
      }
      if (!(/[a-zA-Z0-9]/).test(s[secondPointer])) {
          secondPointer -= 1
          num -= 1
          continue;
      }
      if (s[firstPointer].toLowerCase() !== s[secondPointer].toLowerCase()) {
          return false;
      }
      firstPointer += 1
      secondPointer -= 1
      num -= 2
  }
  return true
};
