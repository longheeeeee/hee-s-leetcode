/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  const dfs = (node1, node2) => {
    if (!node1 && !node2) {
      return null
    }
    if (node1 && node2) {
      // console.log('same, ', node1.val, node2.val)
      return {
        val: node1.val + node2.val,
        left: dfs(node1.left, node2.left),
        right: dfs(node1.right, node2.right)
      }
    }
    return node1 || node2
  }
  return dfs(root1, root2)
};
// @lc code=end

