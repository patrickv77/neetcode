/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 * 
 * Constraints:
 * n == position.length == speed.length
 * 1 <= n <= 105
 * 0 < target <= 106
 * 0 <= position[i] < target
 * All the values of position are unique.
 * 0 < speed[i] <= 106
 * 
 */
var carFleet = function(target, position, speed) {
  // key observations, if a car in a position further away reaches the target BEFORE or AT THE SAME TIME as the car in front,
  // then it is considered part of the front car's fleet

  // sorting the cars by order simplifies the solution greatly, however you must anchor the speed affiliated with the car to the newly sorted array

  const n = position.length;
  const indices = [];
  // fill indices
  for(let i = 0; i < n; i++) indices.push(i);

  // sort indices based on POSITION
  indices.sort((a,b) => position[b] - position[a]);

  // declare starting position
  let curr = indices[0];
  // track number of fleets
  let res = 1;

  // loop through starting with the 2nd highest position.. ie indices[1]
  for(let i = 1; i < n; i++) {
    let index = indices[i];
    // check if the fleet in front reaches target before the current index...
    // if it does, then we know there is another fleet...
    // increment res (fleet counter) and set new "head" of the fleet
    if((target - position[index]) * speed[curr] > (target - position[curr]) * speed[index]) {
      res++;
      curr = index;
    }
  }

  // return fleet count
  return res;
};

console.log(carFleet(12,[10,8,0,5,3],[2,4,1,1,3]));
console.log(carFleet(10,[3],[3]));
console.log(carFleet(100,[0,2,4],[4,2,1]));
console.log(carFleet(50,[40,30,20,10,1],[10,10,10,10,10]));