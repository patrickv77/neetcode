/**
 * @param {string} s
 * @return {boolean}
 * 
 * Constraints:
 * 1 <= s.length <= 2 * 105
 * s consists only of printable ASCII characters.
 */


var isPalindrome = function(s) {
  // remove all non alpha-numeric chars
  const replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  for(let i = 0, j = replaced.length-1; i <= replaced.length/2, j >= replaced.length/2; i++, j--){
    if(replaced[i] !== replaced[j]) return false;
  }
  return true;
};