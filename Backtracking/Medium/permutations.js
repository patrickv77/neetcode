/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// runtime 57ms -- beats 84.18%
// memory 44.99mb -- beats 44.88%
var permute = function (nums) {
  // declare array to return stored permutations
  let res = [];

  // helper function that handles the backtracking
  const permuteHelper = (num, numsArr, currArr) => {
    if (numsArr.length === 0) {
      // when numsArr has no numbers left, push permutation array into res
      res.push([...currArr, num]);
      return;
    } else {
      // loop through nums arr and create a new recursive chain
      for (let i = 0; i < numsArr.length; i++) {
        permuteHelper(
          numsArr[i],
          [...numsArr.slice(0, i), ...numsArr.slice(i + 1)],
          [...currArr, num]
        );
      }
    }
  };

  // loop through nums and start building permutations recursively
  for (let i = 0; i < nums.length; i++) {
    permuteHelper(nums[i], [...nums.slice(0, i), ...nums.slice(i + 1)], []);
  }

  // return res
  return res;
};

// console.log(permute([0,1]))
