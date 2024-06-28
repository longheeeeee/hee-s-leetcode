/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.q1 = []
  this.q2 = []

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  while(this.q1.length > 1) {
    this.q2.push(this.q1.shift())
  }
  const tmp = this.q1.shift()
  while(this.q2.length) {
    this.q1.push(this.q2.shift())
  }
  return tmp
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  const tmp = this.pop()
  this.push(tmp)
  return tmp
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.q1.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

