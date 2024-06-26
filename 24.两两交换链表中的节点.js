/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let pre = {
    next: head
  }
  const start = pre
  let left = head
  let right = left?.next
  if (!left || !right) {
    return head
  }
  while(right) {
    const next = right.next
    left.next = next
    right.next = left
    pre.next = right
    pre = left
    left = next
    right = left?.next
  }
  return start.next
};

// 减少词法作用域往上查找的时间
var swapPairs = function(head) {
  let pre = {
    next: head
  }
  const start = pre
  while(pre.next && pre.next.next) {
    let left = pre.next
    let right = pre.next.next
    const next = right.next
    left.next = next
    right.next = left
    pre.next = right
    pre = left
    left = next
    right = left?.next
  }
  return start.next
};
// @lc code=end

