/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var MyLinkedList = function() {
  this.prevHead = {
    next: null,
    val: null,
  }
  this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  console.log('get, index: ', index)
  if (index > (this.size - 1)) {
    return -1
  }
  let res = this.prevHead.next
  for (let i = 0; i < index; i++) {
    console.log('get, for, cur: ', res.val)
    res = res.next
  }
  return res.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size ) {
    console.log('add reject', index, this.size)
    return -1
  }
  let prev = this.prevHead
  for (let i = 0; i < index; i++) {
    console.log('1', prev.val, index)
    prev = prev.next
  }
  const node = {
    val: val,
    next: prev.next
  }
  prev.next = node
  this.size += 1
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index > this.size - 1) {
    return -1
  }
  let prev = this.prevHead
  for (let i = 0; i < index - 1; i++) {
    prev = prev.next
  }
  prev.next = prev.next.next
  this.size -= 1

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

