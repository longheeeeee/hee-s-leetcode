/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// 迭代
var preorderTraversal = function(root) {
  if (!root) return []
  const stack = [root]
  const res = []
  while(stack.length) {
    const target = stack.pop()
    res.push(target.val)
    if (target.right) {
      stack.push(target.right)
    }
    if (target.left) {
      stack.push(target.left)
    }
  }
  return res
};
// 递归
var preorderTraversal = function(root) {
  const res = []
  const traverse = (node) => {
    if (!node) return null
    // 中间
    res.push(node.val)
    // 左右
    traverse(node.left)
    traverse(node.right)
  }
  traverse(root)
  return res
};
// @lc code=end

