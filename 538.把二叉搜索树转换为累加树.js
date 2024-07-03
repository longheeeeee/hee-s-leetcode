/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
var convertBST = function(root) {
  if (!root) {
    return root
  }
  let sum = -Infinity
  const bfs = (node) => {
    // 中序遍历，并且先右再左
    if (!node.left && !node.right) {
      if (sum === -Infinity) {
        sum = node.val
        return 
      }
    }
    if (node.right) {
      bfs(node.right)
    }
    if (sum === -Infinity) {
      sum = node.val
    }
    else {
      sum += node.val
      node.val = sum
    }
    if (node.left) {
      bfs(node.left)
    }
  }
  bfs(root)
  return root
};
// @lc code=end

