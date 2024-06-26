/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const _head = {
    next: head
  }
  let cur = _head
  while(cur?.next) {
    let next = cur.next
    while(next && next.val === val) {
      next = next.next ? next.next : null
    }
    cur.next = next
    cur = next
  }
  return _head.next
};
// @lc code=end

