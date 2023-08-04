/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.pq = nums.sort((a,b) => a-b);
    if(nums.length > k) {
      this.pq = this.pq.slice(nums.length - k);
    }
    // console.log(this.pq);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.pq.length < this.k) {
      this.pq.push(val);
      this.pq = this.pq.sort((a,b) => a-b).slice(this.pq.length - this.k);
    }else if(val > this.pq[0]){
      // remove first value, splice in new value at correct index
      this.pq = this.pq.slice(1);
      let index = 0;
      while(val > this.pq[index] && index !== this.pq.length) {
        index++
      }
      this.pq.splice(index, 0, val);
      return this.pq[0];
    }
    return this.pq[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kthLargest.add(3));   // return 4
// console.log(kthLargest.add(5));   // return 5
// console.log(kthLargest.add(10));  // return 5
// console.log(kthLargest.add(9));   // return 8
// console.log(kthLargest.add(4));   // return 8

// let kthLargest = new KthLargest(1, []);
// console.log(kthLargest.add(-3));
// console.log(kthLargest.add(-2));
// console.log(kthLargest.add(-4));
// console.log(kthLargest.add(0));

// [[3,[5,-1]],[2],[1],[-1],[3],[4]]
// expected [null,-1,1,1,2,3]

let kthLargest = new KthLargest(3,[5,-1]);
console.log(kthLargest.add(2));
console.log(kthLargest.add(1));
console.log(kthLargest.add(-1));
console.log(kthLargest.add(3));
console.log(kthLargest.add(4));