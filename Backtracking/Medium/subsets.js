/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Constraints:
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 */

// runtime 62ms -- beats 67.43%
// memory 44.18mb -- beats 37.26%
var subsets = function(nums) {
    let res = [];
    const subsetsHelper = (n, arr) => {
      if(n === nums.length) {
        res.push(arr);
        return;
      }

      // take it
      subsetsHelper(n+1, [...arr, nums[n]]);
      // leave it
      subsetsHelper(n+1, [...arr]);
    }

    subsetsHelper(0,[]);
    return res;
};

console.log(subsets([1,2,3]));