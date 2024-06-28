/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  if (!root) {
    return []
  }
  let cur = root
  const stack = []
  const res = []
  while(stack.length > 0 || cur) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
      continue
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res
}
var inorderTraversal = function(root, res = []) {
  if (!root) return res
  root.left && inorderTraversal(root.left, res)
  res.push(root.val)
  root.right && inorderTraversal(root.right, res)
  return res
};
// @lc code=end

