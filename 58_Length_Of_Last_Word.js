/* Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal
substring
 consisting of non-space characters only.
 */
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let length = 0;
  // Start from back to reduce time - improve best case time
  for (let i=s.length-1; i>=0; i--) {
      if(s[i] !== ' ') { // Only start counting length once a letter is found
          length += 1
      }
      if (s[i] == ' ' && length > 0) { // If the space comes before the last word, return length
          return length
      }
  }
  return length
};
