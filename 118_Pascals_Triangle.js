/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let output = [];
  for (let i=0; i<numRows; i++) {
      output[i] = [1];
      for (let x=0; x<i; x++) {
          const left = output[i-1][x]
          const right = isNaN(output[i-1][x+1]) ? 0 : output[i-1][x+1]
          // Insert into row's array
          output[i].push(left + right)
      }
  }
  return output
};
