/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  const queue = [root]
  let res = 0
  while(queue.length) {
    const curLength = queue.length
    for (let i = 0; i < curLength; i++) {
      const item = queue.shift()
      if (item.left) {
        queue.push(item.left)
      }
      if (item.right) {
        queue.push(item.right)
      }
    }
    res++
  }
  return res
}
var maxDepth = function(root) {
  if (!root) return 0
  let max = 0
  const dfs = (item, depth) => {
    if (!item.left && !item.right) max < depth && (max = depth)
    item.left && dfs(item.left, depth+1)
    item.right && dfs(item.right, depth+1)
  }
  dfs(root, 1)
  return max
};
// @lc code=end

