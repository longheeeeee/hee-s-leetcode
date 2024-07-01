/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
  if (!root) {
    return []
  }
  const res = []
  const queue = [root]
  while(queue.length) {
    let curLength = queue.length
    for (let i = 0; i < curLength; i++) {
      const item = queue.shift()
      if (i === 0) {
        res.push(item.val)
      }
      if (item.right) {
        queue.push(item.right)
      }
      if (item.left) {
        queue.push(item.left)
      }
    }
  }
  return res
};
// @lc code=end

