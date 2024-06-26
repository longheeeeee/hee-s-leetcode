/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let fast = head
  let slow = head
  while(true) {
    fast = fast?.next?.next
    slow = slow?.next
    if (fast === slow || !fast?.next) {
      break
    }
  }
  if (!fast?.next) {
    return null
  }
  slow = head
  while(slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return fast
};
var detectCycle = function(head) {
  let p1 = head
  let p2 = head
  do {
    p1 = p1?.next
    p2 = p2?.next?.next
  }
  while(p2 && p1 !== p2)
  if (!p2) return null
  p1 = head
  
  while(true) {
    if (p1 === p2) return p1
    p1 = p1.next
    p2 = p2.next
  }
};

// @lc code=end

