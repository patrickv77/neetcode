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
  
  // forward pointer moves until it is greater than or equal to height of prev pointer
  // as pointer moves, add height difference of each step
  // when the forward pointer reaches a greater than or equal height, move prev pointer to forward pointer location
  for(forward; forward <= height.length - 2; forward++) {
    console.log(height[forward], height[forward+1]);
    console.log("res:", res)
    if(height[forward] > height[forward+1]) {
      let heightMin = Math.min(height[trailing], height[forward]);
      while(trailing < forward) {
        console.log("height forward", height[forward]);
        console.log("height min: ", heightMin);
        console.log("height[trailing]: ", height[trailing]);
        res += heightMin - height[trailing];
        trailing++;
      }
    }
  }
  
  return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));