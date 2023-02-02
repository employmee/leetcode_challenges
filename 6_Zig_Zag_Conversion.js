/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
            P     I    N
            A   L S  I G
            Y A   H R
            P     I
And then read line by line: "PINALSIGYAHRPI"

Write the code that will take a string and make this conversion given a number of rows:
          string convert(string s, int numRows);
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  let output = "";
  let currRow = 0;
  let currIdx = 0;
  let direction = 0 // 0 = down, 1 = up
  if (numRows === 1) {return s}

  while(currRow < numRows) {
    // Check if the next index of the row exists, if it doesnt means move on to the next row
    if (s[currIdx]) {
      // add the letter to the output
      output += s[currIdx]
      // Set the increment of the index to be 2 times no of remaining rows if current direction is downwards,
      // else increment will be 2 times no of previous rows
      let increment = direction === 0 ? ((numRows-currRow)-1)*2 : (currRow)*2;
      // Increase the current index by increment
      currIdx += increment
      // Change direction to different from previous UNLESS
      // 1. first row then direction will always be downwards
      // 2. last row then direction will always be upwards
      direction = (direction === 0 && currRow!==0) || currRow===numRows-1? 1 : 0;
    } else {
      // Start next row
      currRow += 1
      // Set direction to down unless on last row then start direction upwards
      direction = currRow === numRows - 1 ? 1 : 0
      // Reset starting index to the row
      currIdx = currRow
    }
  }
  return output
};
