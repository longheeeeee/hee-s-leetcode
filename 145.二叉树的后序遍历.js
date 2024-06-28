/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  if (!root) {
    return []
  }
  const res = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
    res.push(node.val)
  }
  return res.reverse()
}
var postorderTraversal = function(root) {
  const res = []
  const traverse = (node) => {
    if (!node) {
      return 
    }
    if (node.left) {
      traverse(node.left)
    }
    if (node.right) {
      traverse(node.right)
    }
    res.push(node.val)
  }
  traverse(root)
  return res
};
// @lc code=end

