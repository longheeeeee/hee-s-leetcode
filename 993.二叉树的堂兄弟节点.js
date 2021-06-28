/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let xd, yd, xp, yp
  function dfs(node, p, d, x, y) {
    if (xd!==undefined && yd !== undefined) return
    if (node.val === x) {
      xd = d
      xp = p
    }
    else if (node.val === y) {
      yd = d
      yp = p
    }
    if (node.left) {
      dfs(node.left, node.val, d+1, x, y)
    }
    if (node.right) {
      dfs(node.right, node.val, d+1, x, y)
    }
  }
  dfs(root, null, 0, x, y)
  if (xd === yd && xp !== yp) return true
  return false
};
// @lc code=end

