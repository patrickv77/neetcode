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
  let tCounts = {};
  for(let ind in t) {
    tCounts[t[ind]] = tCounts[t[ind]] + 1 || 1;
  }
  const tCountKeys = Object.keys(tCounts);
  while(window <= s.length) {
    const dict = {};
    for(let i = 0; i < s.length - window + 1; i++) {
      if(Object.keys(dict).length === 0) {
        for(let j = 0; j < window; j++) {
          // populate the first window
          dict[s[j]] = dict[s[j]] + 1 || 1;
        }
      }else{ 
        // remove previous and add next
        if(dict[s[i-1]] === 1) {
          delete dict[s[i-1]];
        }
        else {
          dict[s[i-1]]--;
        }

        dict[s[i+window-1]] = dict[s[i+window-1]] + 1 || 1;
      }

      // console.log(dict)
      for(let k = 0; k < tCountKeys.length; k++) {
        // console.log('tcountkeys[k]', tCountKeys[k])
        // console.log('tcounts[tcountkeys[k]]', tCounts[tCountKeys[k]])
        // console.log('dict[tcountkeys[k]]', dict[tCountKeys[k]])
        if(tCounts[tCountKeys[k]] !== dict[tCountKeys[k]]) break;
        // return as soon as output is found
        if(k === tCountKeys.length - 1) return s.slice(i, i+window);
      }
      console.log("=====================================")
    }

    window+=1;
  }
  
  // if nothing is found return ""
  return "";
};

// console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
// console.log(minWindow("A", "A")); // A
// console.log(minWindow("A", "AA")); // 
// console.log(minWindow("ABCDGAAAAAA", "DCBA")); // ABCD
// console.log(minWindow("A", "B")); //
// console.log(minWindow("IJKLMNOP", "LNOP")); //LMNOP

// console.log(minWindow("ABC", "AC")); // ABC
console.log(minWindow("bbaa", "aba")) // baa

/*
failed... 147/267
 */