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
  
  // tried to move forward incrementally but fails when decreases multiple steps in a row..
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