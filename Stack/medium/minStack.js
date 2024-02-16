// // runtime 216ms -- beats 11.72%
// // memory 60.09mb -- beats 8.48%
// var MinStack = function () {
//   this.stack = {};
//   this.minStack = {};
//   this.length = 0;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//   this.stack[this.length] = val;

//   if (this.length > 0) {
//     let index = 0;
//     while (val > this.minStack[index] && index != this.length) {
//       index++;
//     }

//     let temp = this.minStack[index];
//     this.minStack[index] = val;

//     for (let i = index + 1; i < this.length + 1; i++) {
//       let prev = this.minStack[i];
//       this.minStack[i] = temp;
//       temp = prev;
//     }
//   } else {
//     this.minStack[0] = val;
//   }

//   this.length++;
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   this.length--;

//   let res = this.stack[this.length];
//   delete this.stack[this.length];

//   let itr = 0;
//   while (this.minStack[itr] !== res) {
//     itr++;
//   }

//   while (itr < this.length) {
//     this.minStack[itr] = this.minStack[itr + 1];
//     itr++;
//   }
//   delete this.minStack[itr];

//   // returns just for testing purposes
//   return res;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   return this.stack[this.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.minStack[0];
// };

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// var stak = new MinStack();
// stak.push(1);
// stak.push(2);
// console.log(stak);
// stak.push(3);
// stak.push(-1);
// stak.push(0);
// console.log(stak);
// let a = stak.pop();
// console.log(a);
// console.log(stak);
// console.log(stak.top());

// refactoring based on an observation i read
// since this is a STACK problem, we do not have to worry about insertion and deletion of elements besides the latest
// although it bothers me a bit to implement pop() using array pop(), i will be using it for simplicity

// runtime 90ms -- beats 62.81%
// memory 59.23mb -- beats 23.54%
var MinStack = function () {
  this.min = [];
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.min.length === 0) {
    this.min.push(val);
  } else {
    const prev = this.min[this.min.length - 1];
    this.min.push(Math.min(prev, val));
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return;
  this.stack.pop();
  this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};
