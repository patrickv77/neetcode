var MinStack = function() {
    this.stack = {};
    this.minStack = {};
    this.length = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack[this.length] = val;

  if(this.length > 0) {
    let index = 0;
    while(val > this.minStack[index] && index != this.length){
      index++;
    }
    
    let temp = this.minStack[index];
    this.minStack[index] = val;

    for(let i = index+1; i < this.length+1; i++) {
      let prev = this.minStack[i];
      this.minStack[i] = temp;
      temp = prev;
    }
  }else{
    this.minStack[0] = val;
  }

  this.length++;
};

/*



*/

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
