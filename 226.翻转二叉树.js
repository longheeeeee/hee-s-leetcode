/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return root
  }
  const dfs = (node) => {
    [node.left, node.right] = [node.right, node.left]
    node.left && dfs(node.left)
    node.right && dfs(node.right)
  }
  dfs(root)
  return root
}
var invertTree = function(root) {
  if (!root) return null
  let tmp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(tmp)
  return root
};
// @lc code=end

