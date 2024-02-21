/**
 * @param {number} n
 * @return {string[]}
 * 
 * Constraints:
 * 1 <= n <= 8
 * 
 */

var generateParenthesis = function(n) {
  // declare a res array to store VALID parenthesis combinations
  const res = [];

  // create a helper method within the main method so it has access to res array
  const backtrack = (str, open, close) => {
    if(str.length === 2*n) {
      res.push(str);
      return;
    }

    // take it or leave it backtracking method
    if(open < n) backtrack(str + '(', open+1, close);
    if(close < open) backtrack (str + ')', open, close+1);
  }

  // call the helper method
  backtrack('', 0, 0);

  return res;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(2));
console.log(generateParenthesis(1));
console.log(generateParenthesis(0));
console.log(generateParenthesis(7));
