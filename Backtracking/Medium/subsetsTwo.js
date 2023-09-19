/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = {};
  const subsetsHelper = (n, arr) => {
    if(n === nums.length) {
      if(!res[arr]) res[arr] = arr;
      return;
    }

    // take it
    subsetsHelper(n+1, [...arr, nums[n]]);
    // leave it
    subsetsHelper(n+1, [...arr]);
  }

  subsetsHelper(0,[]);
  return Object.values(res);
};

console.log(subsetsWithDup([1,2,2]));