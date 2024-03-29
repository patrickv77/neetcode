/**
 * @param {number[]} temperatures
 * @return {number[]}
 *
 * Constraints:
 * 1 <= temperatures.length <= 105
 * 30 <= temperatures[i] <= 100
 *
 */

// runtime 210ms -- beats 69.49%
// memory 75.00mb -- beats 30.00%
var dailyTemperatures = function (temperatures) {
  // initialize a stack to track indices
  const stack = [];

  // initialize an array with the same length as temperature and set the values to 0
  const res = new Array(temperatures.length).fill(0);

  // loop through temperatures from the END
  for (let i = temperatures.length - 1; i >= 0; i--) {
    // pop elements from the stack while the current temperature is greater
    while (
      stack.length > 0 &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    //if the stack is not empty, calculate the difference in indices
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1] - i;
    }

    // push the current index onto the stack
    stack.push(i);
  }

  // return the result array
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(
  dailyTemperatures([1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 6, 5, 4, 3, 2, 1])
);
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
