/**
 * @param {string} s
 * @return {number}
 */

// runtime 70ms -- beats 82.60%
// memory 46.14mb -- beats 82.56%
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // loop through each element once
  for (let i = 0; i < s.length; i++) {
    // if it exists in the set, remove a letter, increment left counter and continue
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1);
  }

  return maxSize;
};

console.log(lengthOfLongestSubstring('dbabcdb'));
