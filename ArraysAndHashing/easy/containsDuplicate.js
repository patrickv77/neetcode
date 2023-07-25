/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * constraints:
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

// because the problem explicitly states an integer array.. no need to check
// caching solution, can potentially optimize memory with set?
// runtime 88ms -- beats 79.96%
// memory 53.9mb -- beats 59.36%
var containsDuplicate = function(nums) {
    const dupesObject = {};
    for(let i = 0; i < nums.length; i++) {
      if(dupesObject[nums[i]]){
        return true;
      }else{
        dupesObject[nums[i]] = true;
      }
    }
    return false;
};

// sort and check if previous is not equal to curr
// two pointer solution
// runtime 172ms -- beats 27.61% //BAD
// memory 53.9mb -- beats 85.86%
var containsDuplicateSort = function(nums) {
  // base case, array length is 1, return false;
  if(nums.length === 1) return false;

  // sort array ascending
  // running sort makes the algorithm MUCH slower...
  nums.sort((a,b) => a - b);

  let prev = nums[0], curr;
  for(let i = 1; i < nums.length; i++) {
    curr = nums[i];
    if(prev === curr) return true;
    prev = curr;
  };

  return false;
};

// console.log(containsDuplicateSort([1,2,3,1]));

// just IF

// runtime 78ms -- beats 96.32%
// memory 53.28mb -- beats 66.42%

// adding the else...
// not sure why, maybe my comp just ran it better

// runtime 76ms -- beats 97.74%
// memory 52.94mb -- beats 70.09%
var containsDuplicateSet = function(nums) {
  const dupeSet = new Set();
  for(let i = 0; i < nums.length; i++) {
    if(dupeSet.has(nums[i])) return true;
    else dupeSet.add(nums[i]);
  }
  
  return false;
};

console.log(containsDuplicateSet([1,2,35,5,6,7,1]));