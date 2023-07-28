/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -104 < nums[i], target < 104
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 */

// runtime 69ms -- beats 31.69%
// memory 45.16mb -- beats 44.92%

// MUST BE O(logn) time!! cannot use indexof or a for loop, that is O(n).
var search = function (nums, target) {
  // lower and upper are 1 removed from actual indexes so the algorithm can see the actual 0 and nums.length - 1 indexes
  let lower = -1,
    upper = nums.length;
  let mid = Math.floor(nums.length / 2);
  while (upper - lower !== 1) {
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      upper = mid;
    } else {
      lower = mid;
    }

    mid = Math.floor(lower + (upper - lower) / 2);
  }

  return -1;
};

console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
