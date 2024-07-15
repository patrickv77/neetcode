/**
 * @param {string} s
 * @return {boolean}
 */

// Strategy: Implement a stack. Parse through the string from left to right.
// If it is an open parentheses, add it to the stack. If it is closed, remove the rightmost element
// to compare and check validity.

// runtime 52ms -- beats 84.61%
// memory 49.6mb -- beats 84.38%
var isValid = function (s) {

  const validParens = {
    '[': ']',
    '{': '}',
    '(': ')'
  }
  const openStack = [];
  
  for(let paren of s) {
    if(validParens[paren] !== undefined){
      openStack.push(paren);
    }else{
      if(validParens[openStack.pop()] !== paren) return false;
    }
  }

  if(openStack.length !== 0) return false;

  return true;
};
