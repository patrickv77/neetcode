/**
 * @param {number[]} height
 * @return {number}
 *
 * Constraints:
 * n == height.length
 * 1 <= n <= 2 * 104
 * 0 <= height[i] <= 105
 *
 */
var trap = function (height) {
  let res = 0;
  let left = 0, right = height.length - 1, left_max = 0, right_max = 0;

  // left and right move towards each other
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > left_max) left_max = height[left];
      else res += left_max - height[left];
      left++;
    } else {
      if (height[right] > right_max) right_max = height[right];
      else res += right_max - height[right];
      right--;
    }
  }

  return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));

