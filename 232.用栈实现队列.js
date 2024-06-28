/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
  this.inputStack = []
  this.outputStack = []

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.inputStack.push(x)
  // console.log('push', JSON.stringify(this.inputStack), JSON.stringify(this.outputStack))
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.outputStack.length) {
    // console.log('pop1', JSON.stringify(this.inputStack), JSON.stringify(this.outputStack))
    return this.outputStack.pop()
  }
  while(this.inputStack.length) {
    this.outputStack.push(this.inputStack.pop())
  }
  // console.log('pop2', JSON.stringify(this.inputStack), JSON.stringify(this.outputStack))
  return this.outputStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.outputStack.length) {
    while(this.inputStack.length) {
      this.outputStack.push(this.inputStack.pop())
    }
  }
  const tmp = this.outputStack.pop()
  this.outputStack.push(tmp)
  return tmp
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !(this.inputStack.length || this.outputStack.length)
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

