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