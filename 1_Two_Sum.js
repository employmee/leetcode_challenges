/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const numsObj = {}
  const result = []

  // convert array to object with elem as key and index as value
  nums.forEach((num, idx) => {
      numsObj[num] = idx
  });

  // Loop through each item in array
  nums.every((num, idx) => {
      if (result.length == 2) {
          return false;
      }
      // get value of pair that will equate to target
      const pair = target - num
      // check if pair value exists in numsObj
      if (numsObj[pair] && (numsObj[pair] != idx)) {
          result.push(idx);
          result.push(numsObj[pair]);
      }
      return true
  })

  return result
};
