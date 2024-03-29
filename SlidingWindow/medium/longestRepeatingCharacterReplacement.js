/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 *
 * Constraints:
 * 1 <= s.length <= 105
 * s consists of only uppercase English letters.
 * 0 <= k <= s.length
 *
 */

// runtime 63ms -- beats 85.22%
// memory 50.85mb -- beats 36.73%
var characterReplacement = function (s, k) {
  // start with two pointers and a variable to track most used letter count
  let l = 0,
    r = 0,
    mostUsedLetter = 0;
  // use an object to track the count of letters
  const letterCount = {};

  // loop through s, add the characters to the object and track the count of each
  for (r; r < s.length; r++) {
    letterCount[s[r]] = letterCount[s[r]] + 1 || 1;
    // track the most used letter and measure that against all other letters (should equal k);
    mostUsedLetter = Math.max(mostUsedLetter, letterCount[s[r]]);
    // if right index minus left index plus 1 minus most used letter is greater than k, slide the window
    if (r - l + 1 - mostUsedLetter > k) {
      // decrement from the dictionary and increment the left pointer
      letterCount[s[l]]--;
      l++;
    }
  }

  // return the length of the sliding window r minus l
  return r - l;
};

console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));
console.log(characterReplacement('ABACAB', 2));
console.log(characterReplacement('AAABBBAAABBAAA', 2));
