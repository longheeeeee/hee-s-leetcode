/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1, p2 = l2, sum = '', add1 = 0, oriRes, curRes
  while(p1 || p2 || add1)
  {
    sum = (p1 ? parseInt(p1.val) : 0) +
    (p2 ? parseInt(p2.val) : 0) +
    (add1 || 0)
    if (sum >= 10) {
      add1 = 1
      sum = sum % 10
    }
    else {
      add1 = 0
    }
    if (!oriRes) {
      oriRes = curRes = new ListNode(sum)
    }
    else {
      let next = new ListNode(sum)
      curRes = curRes.next = next
    }
    p1 && (p1 = p1.next)
    p2 && (p2 = p2.next)
  }
  return oriRes
};
// var addTwoNumbers = function(l1, l2) {
//   let str1 = ''
//   do {
//     str1 = l1.val + str1
//     l1 = l1.next
//   }
//   while(l1)
//   let str2 = ''
//   do {
//     str2 = l2.val + str2
//     l2 = l2.next
//   }
//   while(l2)
//   let res = (parseInt(str1) + parseInt(str2)).toString()
//   console.log('str1', str1)
//   console.log('str2', str2)
//   console.log('res', res)
//   let cur
//   for(let i = 0 ; i < res.length ; i++) {
//     if (cur) {
//       let pre = new ListNode(res[i])
//       pre.next = cur
//       cur = pre
//     }
//     else {
//       cur = new ListNode(res[i])
//     }
//   }
//   return cur
// };
// @lc code=end

