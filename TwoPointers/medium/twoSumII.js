/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// runtime 52ms -- beats 85.81%
// memory 42.98mb -- beats 40.00%
var twoSum = function (numbers, target) {
  // ALWAYS a solution ie dont worry about numbers being empty
  // left and right pointers, if less, move left pointer, if greater, move right pointer
  let left = 0;
  let right = numbers.length - 1;

  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    }
  }

  return [left + 1, right + 1];
};

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([2,3,4],6));
// console.log(twoSum([-1,0,1,2],-1))
