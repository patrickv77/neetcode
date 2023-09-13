/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [];
  const combinationSumHelper = (candidatesArray, curr, acc) => {
    if(acc === 0) res.push(curr)
    else{
      for(let i = 0; i < candidatesArray.length; i++) {
        let tempArr = [...curr];
        if(acc - candidatesArray[i] >= 0) {
          tempArr.push(candidatesArray[i]);
          combinationSumHelper(candidatesArray.slice(i), tempArr, acc - candidatesArray[i]);
        }
      }
    }
  }

  combinationSumHelper(candidates,[],target)
  return res;
};

console.log(combinationSum([2,3,6,7], 7))