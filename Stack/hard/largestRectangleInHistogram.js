/**
 * @param {number[]} heights
 * @return {number}
 *
 * Constraints:
 * 1 <= heights.length <= 105
 * 0 <= heights[i] <= 104
 *
 */
var largestRectangleArea = function (heights) {
  // create a stack that stores the indexes of heights
  // set max area to be heights at index 0 and push -1 (placeholder for algo logic) and 0 into the stack

  // loop through heights array starting at 1 (since we already accounted for the first index)
  // we must determine if heights[i] >= or < the latest value in the stack
  // if >= simply push into the stack and continue
  // if it is less than, then we evaluate all previous values before continuing with a lesser value

  // return max area
};