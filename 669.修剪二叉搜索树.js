/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  // 跟删除一个节点相同，分成多种不同情况
  const bfs = (node) => {
    if (node.left) {
      node.left = bfs(node.left)
    }
    if (node.right) {
      node.right = bfs(node.right)
    }
    if (node.val > high || node.val < low) {
      // 叶子节点
      if (!node.left && !node.right) {
        return null
      }
      if (node.left && !node.right) {
        return node.left
      }
      if (node.right && !node.left) {
        return node.right
      }
      let cur = node.right
      while(cur.left) {
        cur = cur.left
      }
      cur.left = node.left
      return node.right
    }
    return node
  }
  return bfs(root)
};
// @lc code=end

