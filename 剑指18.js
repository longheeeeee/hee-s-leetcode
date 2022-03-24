/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
  let pre = {
    val: null, 
    next: head
  }
  let cur = pre
  while (cur.next && cur.next.val !== val) {
    cur = cur.next
  }
  cur.next = cur.next ? cur.next.next : null
  return pre.next
};