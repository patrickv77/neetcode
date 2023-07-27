/**
 * @param {string} s
 * @return {boolean}
 * 
 * Constraints:
 * 1 <= s.length <= 2 * 105
 * s consists only of printable ASCII characters.
 */

// runtime 63ms -- beats 92.64%
// memory 44.45mb -- beats 79.78%

// runtime 58ms -- beats 97.83%
// memory 44.68mb -- beats 74.25%
var isPalindrome = function(s) {
  // remove all non alpha-numeric chars
  const replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  for(let i = 0; i <= replaced.length/2; i++){
    console.log(replaced[i],replaced[replaced.length - 1 - i])
    if(replaced[i] !== replaced[replaced.length - 1 - i]) return false;
  }
  return true;
};