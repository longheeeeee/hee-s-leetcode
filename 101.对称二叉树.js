/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  const dfs = (left, right) => {
      if (!left && !right) return true
      if (!(left && right) || left.val !== right.val) return false
      if (!dfs(left.left, right.right)) return false
      if (!dfs(left.right, right.left)) return false
      return true
  }
  return dfs(root.left, root.right)
};
// @lc code=end

