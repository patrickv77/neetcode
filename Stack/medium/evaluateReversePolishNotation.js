/**
 * @param {string[]} tokens
 * @return {number}
 * 
 * Constraints:
 * 1 <= tokens.length <= 104
 * tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
 * 
 */
var evalRPN = function(tokens) {
  // we may have to account for tokens being length 1 and not having any value (i.e. an operator as the only token)
  if(tokens.length === 1) return tokens[0];

  const operators = new Set(['+', '-', '*', '/']);
  const tokenStack = [];

  for(let token of tokens) {
    // add integers to the stack
    if(!operators.has(token)){
      tokenStack.push(token);
    }else{
      // when an operator is encountered, pop from the stack and evaluate using the operator
      // push the result back onto the stack
      // continue until the end of tokens
      let valRight = tokenStack.pop();
      let valLeft = tokenStack.pop();

      switch(token) {
        case '+':
          tokenStack.push(valLeft + valRight);
          break;
        case '-':
          tokenStack.push(valLeft - valRight);
          break;
        case '*':
          tokenStack.push(valLeft * valRight);
          break;
        case '/':
          tokenStack.push(valLeft / valRight);
          break;
      }
    }
  }

  // return the last value in the stack
  return tokenStack.pop();
};