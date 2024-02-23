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


};