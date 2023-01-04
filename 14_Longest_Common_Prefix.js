/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". */
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let commonPrefix = strs[0];
  // loop through all strings from index 1 onwards
   for (let x = 1; x < strs.length; x++) {
       const currStr = strs[x];
       // Loop through each letter in the string but only loop through common prefix length to reduce time
       for (let i = 0; i < commonPrefix.length; i++) {
           if (currStr[i] != commonPrefix[i]) {
              // Once no match in the letters, cut the string from that letter onwards
               commonPrefix = commonPrefix.slice(0,i)
           }
       }
   }

  return commonPrefix
};
