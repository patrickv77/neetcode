/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Constraints:
 * 2 <= nums.length <= 105
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * 
 */
var productExceptSelf = function(nums) {
    // get result in two passes, first pass will append to an array the product of the numbers left of i
    // second pass will multiply the numbers to the right of i by the previous results

    let res = [];

    let prefix = 1;

    for(let i = 0; i < nums.length; i++) {
      res[i] = prefix;
      prefix *= nums[i];
    }

    let suffix = 1;
    
    for(let j = nums.length-1; j >= 0; j--) {
      res[j] *= suffix;
      suffix *= nums[j];
    }

    return res;
};