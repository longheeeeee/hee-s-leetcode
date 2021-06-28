/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// brent算法
var hasCycle = function(head) {
    let t = head
    let r = head
    let time = 2
    while (r) {
      for (let i = 0; i < time; i++) {
        r = r.next
        if (!r || r === t) break
      }
      if (!r) break
      if (r === t) break
      time <<= 1
      t = r
    }
    return !!r
};
// foyld算法
// var hasCycle = function(head) {
//     let p1 = head
//     let p2 = head
//     do {
//       p1 = p1?.next
//       p2 = p2?.next?.next
//     }
//     while(p2 && p1 !== p2)
//     if (p2 && p1 === p2) {
//       return true
//     }
//     return false
// };
// @lc code=end

