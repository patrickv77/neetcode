/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * Constraints:
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 * 1 <= k <= nums.length
 *
 */
var maxSlidingWindow = function (nums, k) {
  // implement a monotonic deque structure: essentially run one pass
  // if you find a new max, deque everything. otherwise add it to the stack

  // key insight: length of output is nums.length - k + 1
  // should be O(N) time
};
