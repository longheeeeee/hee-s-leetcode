/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
  if (!root) {
    return root
  }
  const queue = [root]
  while(queue.length) {
    const curLength = queue.length
    let prev = null
    for (let i = 0; i < curLength; i++) {
      const item = queue.shift()
      prev && (prev.next = item)
      prev = item
      if (item.left) {
        queue.push(item.left)
      }
      if (item.right) {
        queue.push(item.right)
      }
    }
  }
    return root
};
// @lc code=end

