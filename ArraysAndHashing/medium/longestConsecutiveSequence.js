/**
 * @param {number[]} nums
 * @return {number}
 *
 * Constraints:
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 *
 */

// runtime 89ms -- beats 95.29%
// memory 72.16mb -- beats 40.61%
var longestConsecutive = function (nums) {
  // base case
  if (nums.length === 0) return 0;

  // declare a set and add all values of nums to it
  const numsSet = new Set();
  for (let number of nums) {
    numsSet.add(number);
  }
  // declare a res variable to track the max number of elements among consecutive numbers

  let res = 1; // if there is at least 1 value in nums, res is guaranteed to be at least 1

  // loop through the set, for each element, check to see if it has no number before it but has a number after it
  // this guarantees that you are starting from the lowest element
  for (let setNum of numsSet) {
    if (!numsSet.has(setNum - 1) && numsSet.has(setNum + 1)) {
      let consecutiveNumCount = 1;

      // count how many consecutive numbers in the sequence
      while (numsSet.has(setNum + consecutiveNumCount)) {
        consecutiveNumCount++;
      }
      // check against res
      res = Math.max(res, consecutiveNumCount);
    }
  }

  // return res
  return res;
};

// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
// console.log(longestConsecutive([0,0,0,0,0,1,2,3])); // 4
// console.log(longestConsecutive([])); // 0
// console.log(longestConsecutive([0,0,0,0])); // 1
// console.log(longestConsecutive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])); // 18
// console.log(longestConsecutive([1,2,3,4,5,7,8,9,10,11,12,13])); // 7
// console.log(longestConsecutive([1,2,3,4,5,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23])); // 9
// console.log(longestConsecutive([1,2,4,5,7,8,10,11,13,14])); //2
