/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  if (!arr.length) return false
  if (arr.length === 1) return true
  let left = 0, right = arr.length - 1
  while(left < right) {
    if (arr[left++] !== arr[right--]) return false
  }
  return true
};
// @lc code=end

