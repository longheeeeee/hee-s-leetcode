/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
  this.minStack = []
  this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  let min = this.minStack[this.minStack.length -1]
  if (min === undefined || val < min) {
      this.minStack.push(val)
  }
  else {
      this.minStack.push(min)
  }
  this.stack.push(val)
  return val
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.minStack.pop()
  return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

