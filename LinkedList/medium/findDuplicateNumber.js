/**
 * @param {number[]} nums
 * @return {number}
 */

// runtime 58ms -- beats 99.34%
// memory 49.66mb -- beats 77.35%
var findDuplicate = function (nums) {
  let slow = 0,
    fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  let slow2 = 0;
  do {
    slow = nums[slow];
    slow2 = nums[slow2];
  } while (slow !== slow2);

  return slow;
};

console.log(findDuplicate([2, 2, 2, 2, 2]));
