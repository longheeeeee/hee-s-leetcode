/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function(root) {
  // rerturn -1 means its not balanced
  const getHeight = (node) => {
    if (!node.left && !node.right) {
      return 1
    }
    const left = node.left ? getHeight(node.left) : 0
    const right = node.right ? getHeight(node.right) : 0
    // console.log(node.val, left, right)
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1
    }
    return 1 + Math.max(left, right)
  }
  if (!root) {
    return true
  }
  const res = getHeight(root)
  return res !== -1
};
// @lc code=end

