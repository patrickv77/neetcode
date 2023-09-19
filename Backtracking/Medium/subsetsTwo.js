/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// runtime 67ms -- beats 26.59%
// memory 45.28mb -- beats 14.30%
var subsetsWithDup = function (nums) {
  let res = {};
  const subsetsHelper = (n, arr) => {
    if (n === nums.length) {
      let sort = arr.sort((a, b) => a - b);
      if (!res[sort]) res[sort] = sort;
      return;
    }

    // take it
    subsetsHelper(n + 1, [...arr, nums[n]]);
    // leave it
    subsetsHelper(n + 1, [...arr]);
  };

  subsetsHelper(0, []);
  return Object.values(res);
};

console.log(subsetsWithDup([4, 4, 4, 1, 4]));
