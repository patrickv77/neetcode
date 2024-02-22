/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 
 * Constraints:
 * 1 <= temperatures.length <= 105
 * 30 <= temperatures[i] <= 100
 * 
 */
var dailyTemperatures = function(temperatures) {
  // initialize a stack to track indices
  const stack = [];

  // initialize an array with the same length as temperature and set the values to 0
  const res = new Array(temperatures.length).fill(0);

  // loop through temperatures from the END
  for(let i = temperatures.length - 1; i >= 0; i--) {
    // pop elements from the stack while the current temperature is greater
    while(stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]){
      stack.pop();
    }

    //if the stack is not empty, calculate the difference in indices
    if(stack.length > 0) {
      res[i] = stack[stack.length - 1] - i;
    }

    // push the current index onto the stack
    stack.push(i);
  }

  // return the result array
  return res;
};
  