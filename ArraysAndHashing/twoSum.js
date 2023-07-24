/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Constraints:
 * 2 <= nums.length <= 104
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 */

// runtime 84ms -- beats 53.49%
// memory 42.52mb -- beats 55.72%
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const sumCheck = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === sumCheck) return [i, j];
    }
  }
  return 'huh';
};

// runtime 61ms -- beats 86.47%
// memory 42.96mb -- beats 37.13%

// with declared variables in the for loop
// runtime 70ms -- beats 64.73%
// memory 42.67mb -- beats 49.72%

// with only complement variable declared
// runtime 69ms -- beats 66.78%
// memory 42.57mb -- beats 55.72%
var twoSumObjectIndexMap = function (nums, target) {
  const valueIndexObject = {};
  for (let i = 0; i < nums.length; i++) {
    if (valueIndexObject[nums[i]] !== undefined) return [valueIndexObject[nums[i]], i];
    else {
      valueIndexObject[target - nums[i]] = i;
    }
  }
};

// console.log(twoSumObjectIndexMap([1, 3, 4, 5], 6));
