/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let acc = 0;
  for(let i = 0; i < nums.length; i++) {
    acc += nums[i];
    if(acc > max) max = acc;
    if(acc <= 0) acc = 0;
  } 
  return max;
};

// const arr = [-2,1,-3,4,-1,2,1,-5,4];
// const arr = [1]
const arr = [5,4,-1,7,8]

console.log(maxSubArray(arr));