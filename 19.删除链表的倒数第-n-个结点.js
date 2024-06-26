/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const _head = {
    next: head
  }
  let fast = _head
  let slow = _head
  for (let i = 0; i < n; i++) {
    fast = fast.next
    if (!fast) {
      return head
    }
  }
  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return _head.next
}









var removeNthFromEnd = function(head, n) {
  // [1] 1这种情况需要一个pre
  let pre = {
    next: head
  }
  let fast = pre, slow = pre
  let i = n
  while(i > 0) {
    fast = fast.next
    i--
  }
  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return pre.next
};
// @lc code=end

