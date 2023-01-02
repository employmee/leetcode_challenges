/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
  // scenario 1: all letters are capital
  // scenario 2: all letters are lower
  // scenario 3: all letters
  var scenario = 0
  if (word === word.toUpperCase()) {
      return true
  } else if (word === word.toLowerCase()) {
      return true
  } else if (word[0] === word[0].toUpperCase() && word[1] === word[1].toLowerCase() && word.substr(2) === word.substr(2).toLowerCase()) {
      return true
  } else {
      return false
  }

};
