/* Given a string s, find the length of the longest substring without repeating characters. */
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let chars = {}
  let longestString = ''
  let currentString = ''
  for (let i=0; i<s.length; i++) {
      if (chars[s[i]]===undefined || chars[s[i]] < chars[currentString[0]]) {
          chars[s[i]] = i; // Insert/replace char in the chars object with index as the value
          currentString = currentString + s[i]; // add char to substring
          if (i===s.length-1 && currentString.length > longestString.length) {
              longestString = currentString
          }
      } else {
          if (currentString.length > longestString.length) {
              longestString = currentString;
          }
          let prevCharIdx = chars[s[i]]
          currentString = s.slice(prevCharIdx+1,i) + s[i];
          chars[s[i]] = i
      }
  }
  return longestString.length
};
