/* Given a sorted array of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let start = 0, end = nums.length; // we might need to inseart at the end
    while(start < end) { // breaks if lo == hi
        let mid = start + Math.floor((end-start)/2); // always gives the lower mid
        if (target > nums[mid]) { // If target is bigger than middle
            start = mid + 1 // change start index to mid + 1
        } else {
            end = mid // If target less than mid change end index to mid
        }
    }
  return start;
}
