/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false
  }
  const dfs = (node, sum, targetSum) => {
    // if (!node.left && !node.right) {
    //   console.log(node.val, sum)
    // }
    if (!node.left && !node.right && sum + node.val === targetSum) {
      return true
    }
    if (node.left && dfs(node.left, sum + node.val, targetSum)) {
      return true
    }
    if (node.right && dfs(node.right, sum + node.val, targetSum)) {
      return true
    }
    return false
  }
  return dfs(root,  0, targetSum)
};
// @lc code=end

