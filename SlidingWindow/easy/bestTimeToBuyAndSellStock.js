/**
 * @param {number[]} prices
 * @return {number}
 */

// runtime 80ms -- beats 39.22%
// memory 51.09mb -- beats 94.04%
var maxProfit = function (prices) {
  if (!Array.isArray(prices)) return 0;
  if (prices.length <= 1) return 0;
  if (typeof prices[0] !== 'number') return 0;

  //use pointers, store a min and maxdiff variable
  let min = Infinity;
  let maxDiff = 0;
  //loop through array ONE TIME
  for (let i = 0; i < prices.length; i++) {
    //if min changes, change max as well;
    if (prices[i] < min) {
      min = prices[i];
    } else {
      //if we do not reassign min, we check for max
      maxDiff = Math.max(maxDiff, prices[i] - min);
    }
  }
  //return maxDiff
  return maxDiff;
};

// const arr = [7,1,5,3,6,4]; //expect 5
// const arr = [7,6,4,3,1] //expect 0

console.log(maxProfit(arr));
