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
