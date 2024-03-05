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
  if(s === t) return t;

  // use a sliding window of length t to search through s
  // when it reaches the end, increment sliding window size and go again
  let window = t.length;
  while(window < s.length) {
    const dict = {};
    for(let i = 0; i < s.length - window + 1; i++) {
      if(Object.keys(dict).length === 0) {
        for(let j = 0; j < window; j++) {
          // populate the first window
          dict[s[j]] = dict[s[j]] + 1 || 1;
        }
      }else{ 
        // remove previous and add next
        // console.log("REMOVE dict at s[i-1]]", s[i-1]);
        if(dict[s[i-1]] === 1) {
          delete dict[s[i-1]];
          // console.log(dict);
        }
        else {
          dict[s[i-1]]--;
          // console.log(dict);
        }

        // console.log("ADD dict at s[i+window]]", s[i+window]);
        dict[s[i+window-1]] = dict[s[i+window-1]] + 1 || 1;
        // console.log(dict);
      }
      // console.log("window:",window);
      // console.log(dict);
      // console.log(s.slice(i, i+window));
      // console.log("====================================")
      for(let k = 0; k < t.length; k++) {
        if(dict[t[k]] === undefined) break;
        // return as soon as output is found
        if(k === t.length - 1) return s.slice(i, i+window);
      }
    }

    window+=1;
  }
  
  // if nothing is found return ""
  return "";
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("A", "A"));
console.log(minWindow("A", "AA"));
console.log(minWindow("ABCDGAAAAAA", "DCBA"));
console.log(minWindow("A", "B"));
console.log(minWindow("IJKLMNOP", "LNOP"));