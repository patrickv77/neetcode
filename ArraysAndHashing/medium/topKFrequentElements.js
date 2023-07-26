/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Constraints:
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 */

// runtime 69ms -- beats 86.39%
// memory 44.34mb -- beats 92.30%
var topKFrequent = function(nums, k) {
  // the only case where we can immediately exit the function.. ie [1,1] will not work
  if(nums.length <= 1) return nums;

  const map = new Map();
  // loop through the nums array
  nums.forEach(el => {
    if(!map.has(el)) {
      map.set(el, 1);
    }else{
      map.set(el, map.get(el)+1);
    }
  });

  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  return Array.from(sortedMap.keys()).slice(0,k)
};