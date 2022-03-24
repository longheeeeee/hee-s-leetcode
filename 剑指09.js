var CQueue = function() {
  this.stackA = []
  this.stackB = []
  this.switch = (from, to) => {
    while(from.length) {
      to.push(from.pop())
    }
  }
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.stackB.length) {
    return this.stackB.pop()
  }
  if (this.stackA.length) {
    this.switch(this.stackA, this.stackB)
  }
  if (!this.stackB.length) return -1
  return this.stackB.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */