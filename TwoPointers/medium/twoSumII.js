/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // ALWAYS a solution ie dont worry about numbers being empty
  // left and right pointers, if less, move left pointer, if greater, move right pointer

  // graciously 1-indexed... wonderful
  let left = 0;
  let right = numbers.length-1;

  while((numbers[left] + numbers[right]) !== target) {
    if((numbers[left] + numbers[right]) > target) {
      right--;
    }else if((numbers[left] + numbers[right]) < target) {
      left++;
    }
  }

  return [left,right];
};

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([2,3,4],6));
// console.log(twoSum([-1,0,1,2],-1))

