/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  const oriA = headA, oriB = headB
  let a = false, b = false
  while(headA !== headB) {
    if  (!headA.next) {
      if (a) return null
      a = true
      headA = oriB
    }
    else {
        headA = headA.next
    }
    if (!headB.next) {
      if (b) return null
      b = true
      headB = oriA
    }
    else {
      headB = headB.next
    }
  }
  return headA
};
// @lc code=end

