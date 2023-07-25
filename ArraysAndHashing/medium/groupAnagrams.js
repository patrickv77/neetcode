/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * Constraints:
 * 1 <= strs.length <= 104
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 */

// runtime 143ms -- beats 33.11%
// memory 54.48mb -- beats 35.51%
var groupAnagrams = function (strs) {
  // declare object to return
  const res = {};

  // helper function that returns a string representation of the numbers of each letter of the passed in string
  const anagramHelper = (str) => {
    // create an array of length 26 with all 0s
    const letters = new Array(26).fill(0);

    // loop through the string and increment the value at index of the letter
    for (let i = 0; i < str.length; i++) {
      letters[str.charCodeAt(i) - 97]++;
    }

    // return a string represenation of the number of each char in the string
    return letters.toString();
  };

  // loop through strs array
  for (let i = 0; i < strs.length; i++) {
    // get the string representation of number of each char
    const anagramKey = anagramHelper(strs[i]);

    // if the anagramKey key does not exist in res, create a new object with strs[i] as the first element
    // else, it does exist: push strs[i] into the array
    if (!res[anagramKey]) res[anagramKey] = [strs[i]];
    else {
      res[anagramKey].push(strs[i]);
    }
  }

  // return VALUES, an array of arrays (because each value is an array)
  return Object.values(res);
};

console.log(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']));

