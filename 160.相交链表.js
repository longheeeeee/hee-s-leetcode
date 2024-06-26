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
  let a = headA
  let b = headB
  if (!a || !b) {
    return null
  }
  // 任意一个跑到底部
  while(a.next && b.next) {
    a = a.next
    b = b.next
  }
  const afast = !a.next
  // 计算差值
  let diff = 0
  while(afast ? b.next : a.next) {
    afast ? (b = b.next) : (a = a.next)
    diff++
  }
  // console.log('diff: ', diff)
  // 去除差值
  a = headA
  b = headB
  while(diff > 0) {
    afast ? (b = b.next) : (a = a.next)
    diff--
  }
  while(a !== b && a.next && b.next) {
    a = a.next
    b = b.next
  }
  return a === b ? a : null
}
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

