/**
 * @param {number[]} height
 * @return {number}
 * 
 * Constraints:
 * n == height.length
 * 2 <= n <= 105
 * 0 <= height[i] <= 104
 * 
 */
var maxArea = function(height) {
  // two pointer approach
  let max = 0;
  // one pointer starts at the front and one at the back
  let l = 0;
  let r = height.length - 1;
  // calculate the max area based on height at each pointer and store it
  // move the one that is lower (or move any of them once if they are equal)
  // exit the loop when the index at the pointers is the same
  while (l < r) {
    let distance = r - l;
    max = Math.max(max, Math.min(height[l], height[r]) * distance);
    if(height[l] > height[r]){
      r--;
    }else{
      l++;
    }
  }

  // return the max area
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));
console.log(maxArea([1,1,1,1,1,1,2,1]));
console.log(maxArea([2,1,1,2]));