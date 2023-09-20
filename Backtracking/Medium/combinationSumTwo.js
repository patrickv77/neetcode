/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = {};
  const combinationHelper = (array, acc, remainingCandidates) => {
    if (target - acc === 0) {
      array = array.sort((a, b) => a - b);
      if (!res[array]) res[array] = array;
      return;
    } else if (target - acc < 0) {
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

  for (let i = 0; i < candidates.length; i++) {
    combinationHelper([candidates[i]], candidates[i], [
      ...candidates.slice(0, i),
      ...candidates.slice(i + 1),
    ]);
  }

  return Object.values(res);
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))