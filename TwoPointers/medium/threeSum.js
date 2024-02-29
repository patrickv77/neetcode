/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Constraints:
 * 3 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 * 
 */
var threeSum = function(nums) {

    // declare a res array
    const res = [];
    // three pointers approach
    // first step would be to sort the array
    const arr = [...nums]; // so we do not change the input variable
    arr.sort((a,b) => a-b); // sort from least to greatest

    // loop through the new array one time
    for(let i = 0; i < arr.length - 2; i++) {
      // declare two pointers, one starting in front of the for loop, one starting from the end
      // adjust the left and right pointers according to the sum of the three pointers
      if(arr[i] > 0) break;
      if(i>0 && arr[i] === arr[i-1]) continue;

      let j = i+1;
      let k = arr.length - 1;
      while(j < k) {
        if(arr[i] + arr[j] + arr[k] === 0) {
          res.push([arr[i], arr[j], arr[k]]);

          while(arr[j] === arr[j+1]) j++;
          while(arr[k] === arr[k-1]) k--;

          j++;
          k--;
        }else if(arr[i] + arr[j] + arr[k] < 0) j++;
        else k--;
      }
    }

    // return res
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));
console.log(threeSum([-1,0,1,1,1,1,1,1,1,1]));