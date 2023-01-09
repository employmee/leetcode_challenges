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
      if (chars[s[i]]===undefined || chars[s[i]] < chars[currentString[0]]) { // If not repeating character, or repeated char is not in current substring (not applicable)
          chars[s[i]] = i; // Insert/replace char in the chars object with index as the value
          currentString = currentString + s[i]; // add char to substring
          if (i===s.length-1 && currentString.length > longestString.length) { // If reached the end of string, check if substr is longest substr
              longestString = currentString
          }
      } else {
          if (currentString.length > longestString.length) { // Once repeated char found in curr substr, if curr substring is longer, replace longestString
              longestString = currentString;
          }
          let prevCharIdx = chars[s[i]] // Reset the index of char in the obj
          currentString = s.slice(prevCharIdx+1,i) + s[i]; // Replace current string from after the occur of the repeated char to the current character
          chars[s[i]] = i // reset char index in object
      }
  }
  return longestString.length
};
