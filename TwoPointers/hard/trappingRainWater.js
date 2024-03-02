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
  // use two pointers
  // they start at the same point
  let res = 0;
  let trailing = 0;
  let forward = 0;
  let acc = 0;
  
  // forward pointer moves until it is greater than or equal to height of prev pointer
  // as pointer moves, add height difference of each step
  // when the forward pointer reaches a greater than or equal height, move prev pointer to forward pointer location
  for(forward; forward <= height.length - 1; forward++) {
    if(height[trailing] > height[forward]){
      acc += height[trailing] - height[forward];
    }else{
      res += acc;
      trailing = forward;
      acc = 0;
    }
  }
  
  return res;
};
