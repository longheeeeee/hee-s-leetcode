/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) {
    return []
  }
  const res = []
  const queue = [root]
  while(queue.length) {
    const curLength = queue.length
    let max = -Infinity
    for (let i = 0; i < curLength; i++) {
      const item = queue.shift()
      max = Math.max(max, item.val)
      if (item.left) {
        queue.push(item.left)
      }
      if (item.right) {
        queue.push(item.right)
      }
    }
    res.push(max)
  }
  return res
};
// @lc code=end

