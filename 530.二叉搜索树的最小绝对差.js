/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
  let prev = null
  let res = Infinity
  const dfs = (node) => {
    if (!node.left && !node.right) {
      if (!prev) {
        prev = node
        return
      }
      // console.log('1', prev.val, node.val, res)
      if (node.val - prev.val < res) {
        res = node.val - prev.val
      }
      prev = node
      return
    }
    if (node.left) {
      dfs(node.left)
    }
    if (prev) {
    // console.log('2', prev.val, node.val, res)
    }
    if (prev && node.val - prev.val < res) {
      res = node.val - prev.val
      // return
    }
    prev = node
    if (node.right) {
      dfs(node.right)
    }
  }
  dfs(root)
  return res
};
// @lc code=end

