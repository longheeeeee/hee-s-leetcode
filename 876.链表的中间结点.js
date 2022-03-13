/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function(head) {
  let fast = head, slow = head
  while(fast) {
    if (!fast.next) {
      return slow
    }
    fast = fast.next
    if (!fast.next) {
      return slow.next
    }
    fast = fast.next
    slow = slow.next
  }

};
// @lc code=end

