/**
 * @param {string} s
 * @return {boolean}
 */

// Strategy: Implement a stack. Parse through the string from left to right.
// If it is an open parentheses, add it to the stack. If it is closed, remove the rightmost element
// to compare and check validity.
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
