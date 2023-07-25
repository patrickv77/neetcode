/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 */

// runtime 93ms -- beats 46.74%
// memory 44.2mb -- beats 60.04%
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  else {
    const countLetters = {};
    for(let i = 0; i < s.length; i++) {
      // if the letter are the same, they offset each other and may be ignored
      if(s[i] !== t[i]){
        // handle cases for s[i] letter
        if(!countLetters[s[i]]){
          // does not exist, create new key value with s[i] as key and value 1
          countLetters[s[i]] = 1;
        } else {
          if(countLetters[s[i]] === -1) delete countLetters[s[i]];
          else countLetters[s[i]]++;
        }

        if(!countLetters[t[i]]){
          // does not exist, create new key value with s[i] as key and value 1
          countLetters[t[i]] = -1;
        } else {
          if(countLetters[t[i]] === 1) delete countLetters[t[i]];
          else countLetters[t[i]]--;
        }
      }
    }
    return (Object.keys(countLetters).length === 0) ? true : false;
  }
};

// console.log(isAnagram('abcad','cbaab'));

// runtime 59ms -- beats 98.85%
// memory 42.52mb -- beats 88.21%
var isAnagram26LetterArray = function(s, t) {
  if(s.length !== t.length) return false;
  else {
    const letters = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++) {
      letters[s.charCodeAt(i)-97]++;
      letters[t.charCodeAt(i)-97]--;
    }

    if((letters.findIndex((el) => el !== 0)) === -1) return true;
    return false;
  }
};

// console.log(isAnagram26LetterArray('abc','cba'));