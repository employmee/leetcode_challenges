/*
Given an integer x, return true if x is a palindrome, and false otherwise.
Follow up: Could you solve it without converting the integer to a string?
*/
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  // return false if X is negative
  if(x < 0) {
      return false
  }
  // Get length of number
  const strLength = x.toString().length;
  // Get half of length, rounded down if decimal
  let curr = 0;
  // Number of times to loop is half of digit length
  const loopNum = Math.floor(strLength/2);
  // Create two pointers, 1 for the first digit and 1 for the last digit of number. the pointers will be used to get the digit
  let firstPointer = 1;
  let secondPointer = Math.pow(10,(strLength-1));

  // Loop through each half section of number
  while (curr < loopNum) {
    // Get last digit of second half
    let digit = Math.floor((x/firstPointer)%10);
    // Get first digit of first half
    let compare = Math.floor((x/secondPointer)%10);
    if (digit != compare) {
        return false
    }
    firstPointer *= 10;
    secondPointer /= 10;
    curr += 1;
  }
  return true;
};
