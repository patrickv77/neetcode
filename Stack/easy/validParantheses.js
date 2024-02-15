/**
 * @param {string} s
 * @return {boolean}
 *
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 *
 */
var isValid = function (s) {
  // iterate through s and at each char, if open, add to stack, if closed, remove the open from the stack.
  // if this fails, return false.
  let parenStack = [];
  let curlyStack = [];
  let braceStack = [];

  // in constraints, "s consists of parentheses only..." means we do not have to get complicated with checking
  // for other characters

  for (let ch of s) {
    let temp;
    switch (ch) {
      case '(':
        parenStack.push(ch);
        break;
      case '{':
        curlyStack.push(ch);
        break;
      case '[':
        braceStack.push(ch);
        break;
      case ')':
        temp = parenStack.pop();
        if(temp === undefined) return false;
        break;
      case '}':
        temp = curlyStack.pop();
        if(temp === undefined) return false;
        break;
      case ']':
        temp = braceStack.pop();
        if(temp === undefined) return false;
        break;
    }
  }
  if(parenStack.length + curlyStack.length + braceStack.length > 0) return false;
  return true;
};

