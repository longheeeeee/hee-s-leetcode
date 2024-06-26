/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
  if (!head) {
    return head
  }
  let pre = null
  let cur = head
  while(cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};



var reverseList = function(head) {
  if (!head) return null
  let pre = null
  let cur = head
  while(cur) {
    let tmp = cur.next
    cur.next = pre
    pre = cur
    if (tmp) {
      cur = tmp
    }
    else {
      return cur
    }
  }
};
// @lc code=end

