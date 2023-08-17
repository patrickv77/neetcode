/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {  
  let max = -nums.length;
  let sumNums = 0;
  for(let i = 0; i < nums.length; i++) {
    max += i + 1;
    sumNums += nums[i];
  }
  return sumNums - max;
};

// console.log(findDuplicate([1,2,3,4,5,3]));