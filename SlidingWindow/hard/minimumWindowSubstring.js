/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 
 * Constraints:
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 105
 * s and t consist of uppercase and lowercase English letters.
 * 
 */
var minWindow = function(s, t) {
  // base case
  if(t.length > s.length) return "";

  // use a sliding window of length t to search through s
  // when it reaches the end, increment sliding window size and go again
  let window = t.length;
  while(window < s.length) {
    for(let i = 0; i < s.length - window; i++) {
      const dict = {};
      if(Object.keys(dict).length === 0) {
        for(let j = 0; j < window; j++) {
          // populate the first window
          dict[s[j]] = dict[s[j]] + 1 || 1;
        }
      }else{ 
        // remove previous and add next
        if(dict[s[j-1]] === 1) delete dict[s[j-1]];
        else dict[s[j-1]]--;

        dict[s[j]] = dict[s[j]] + 1 || 1;
      }

      for(let k = 0; k < t.length; k++) {
        if(dict[t[k]] === undefined) break;
        // return as soon as output is found
        if(k === t.length - 1) return s.substring(i, i+window);
      }
    }
    window++;
  }
  
  // if nothing is found return ""
  return "";
};