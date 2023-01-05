/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let str = s
  // return false if string has odd number
  if (s.length % 2 != 0) {
      return false
  }
  // take into account for patterns like "(([]){})" or "([])({})"
  while (str.length > 0) {
      if (str.includes('()')) {
          str = str.replace('()','')
      } else if (str.includes('{}')) {
          str = str.replace('{}','')
      } else if (str.includes('[]')) {
          str = str.replace('[]','')
      } else {
          return false
      }
  }
  return true
};
