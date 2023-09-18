/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  const permuteHelper = (num, numsArr, currArr) => {
    if (numsArr.length === 0) {
      res.push([...currArr, num]);
      return;
    }else{
      for(let i = 0; i < numsArr.length; i++) {
        permuteHelper(numsArr[i], [...numsArr.slice(0,i), ...numsArr.slice(i+1)], [...currArr, num]);
      }
    }
  };

  for(let i = 0; i < nums.length; i++) {
    permuteHelper(nums[i], [...nums.slice(0,i), ...nums.slice(i+1)], []);
  }
  return res;
};

// console.log(permute([0,1]))
