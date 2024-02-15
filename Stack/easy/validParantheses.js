/**
 * @param {string} s
 * @return {boolean}
 *
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 * Open brackets must be closed in the correct order***
 *
 */

// runtime 66ms -- beats 22.75%
// memory 49.62mb -- beats 37.49%
var isValid = function (s) {
  // second attempt: brackets must be closed in the same order, first attempt was for an orderless solution
  // declare a map and map the closed parens (key) to the open parens (values)
  const parenMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  // declare a stack to track valid parentheses
  let stack = [];

  // loop through s
  for (let ch of s) {
    // if open parentheses, add to stack
    if (!parenMap.has(ch)) {
      stack.push(ch);
    } else {
      // else it is closed parentheses, check against stack
      // this is the first failure case, unmatching open/close parens
      if (parenMap.get(ch) !== stack.pop()) return false;
    }
  }

  // second failure case, uneven number of open/closed parentheses
  if (stack.length > 0) return false;

  // all failure cases passed, return true
  return true;
};

console.log(isValid('()()()[][][]{}{}{}'));
console.log(isValid('([)]'));
console.log(isValid('((([[[{{{}}}]]])))'));
console.log(isValid('((((((('));
console.log(isValid(')))))))))'));
console.log(isValid('{'));
console.log(isValid('}'));
