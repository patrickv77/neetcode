/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  // if sum of candidates is less than target, return empty array
  if (candidates.reduce((acc, x) => acc + x, 0) < target) return [];

  // otherwise declare empty object res to hold arrays
  let res = {};
  // helper function
  const combinationHelper = (array, acc, remainingCandidates) => {
    console.log(remainingCandidates, acc);
    if (target - acc === 0) {
      array = array.sort((a, b) => a - b);
      if (!res[array]) res[array] = array;
      return;
    } else if (target - acc < 0 || remainingCandidates.length <= 0) {
      return;
    } else {
      for (let i = 0; i < remainingCandidates.length; i++) {
        combinationHelper(
          [...array, remainingCandidates[i]],
          acc + remainingCandidates[i],
          [
            ...remainingCandidates.slice(0, i),
            ...remainingCandidates.slice(i + 1),
          ]
        );
      }
    }
  };

  // invoke helper function
  for (let i = 0; i < candidates.length; i++) {
    combinationHelper([candidates[i]], candidates[i], [
      ...candidates.slice(0, i),
      ...candidates.slice(i + 1),
    ]);
  }

  // return values
  return Object.values(res);
};

// new concept, in each recursive step pass down the new array and target - sum of array as new target, remove any candidates taht are higher than new target

console.log(
  combinationSum2(
    [
      1, 100, 101, 1012, 1015, 1011, 10155, 1231231, 12222, 15555, 177777,
      222222, 3333, 888888,
    ],
    1
  )
);
// console.log(combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 27))
// console.log(combinationSum2([1,1,1,1,1,1,1,1,1],15));
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

// console.log(combinationSum2([29,19,14,33,11,5,9,23,23,33,12,9,25,25,12,21,14,11,20,30,17,19,5,6,6,5,5,11,12,25,31,28,31,33,27,7,33,31,17,13,21,24,17,12,6,16,20,16,22,5], 28));
