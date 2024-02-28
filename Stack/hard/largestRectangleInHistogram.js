/**
 * @param {number[]} heights
 * @return {number}
 *
 * Constraints:
 * 1 <= heights.length <= 105
 * 0 <= heights[i] <= 104
 *
 */

// runtime 88ms -- beats 80.46%
// memory 62.23mb -- beats 66.84%
var largestRectangleArea = function (heights) {
  // create a stack that stores the indexes of heights
  let indexStack = [];
  // set max area to be heights at index 0 and push -1 (placeholder for algo logic) and 0 into the stack
  indexStack.push(-1);
  indexStack.push(0);
  let maxArea = heights[0];
  // loop through heights array starting at 1 (since we already accounted for the first index)
  for (let i = 1; i < heights.length; i++) {
    // we must determine if heights[i] >= or < the latest value in the stack
    if (heights[i] >= heights[indexStack[indexStack.length - 1]]) {
      // if >= simply push into the stack and continue
      indexStack.push(i);
    } else {
      // if it is less than, then we evaluate all previous values before continuing with a lesser value
      while (
        indexStack[indexStack.length - 1] >= 0 &&
        heights[i] <= heights[indexStack[indexStack.length - 1]]
      ) {
        // all values of height should be arranged in decreasing order, as you pop from the stack
        // you evaluate the maximum rectangle area and compare it to your maxArea variable
        let index = indexStack.pop();
        maxArea = Math.max(
          maxArea,
          (i - indexStack[indexStack.length - 1] - 1) * heights[index]
        );
      }
      indexStack.push(i);
    }
  }

  // if the numbers continually increase in height until the end, then we will exit the for loop before evaluating for maxArea
  while (indexStack[indexStack.length - 1] >= 0) {
    let index = indexStack.pop();
    maxArea = Math.max(
      maxArea,
      (heights.length - indexStack[indexStack.length - 1] - 1) * heights[index]
    );
  }

  // return max area
  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([1]));
console.log(largestRectangleArea([4]));
console.log(largestRectangleArea([0]));
console.log(largestRectangleArea([1, 2, 3, 4, 5, 5, 5]));
console.log(largestRectangleArea([1, 2, 3, 4, 5, 1, 1]));
console.log(largestRectangleArea([1, 1, 1, 1, 5, 1, 1, 1, 1, 1]));
console.log(largestRectangleArea([10, 1, 1, 1]));
