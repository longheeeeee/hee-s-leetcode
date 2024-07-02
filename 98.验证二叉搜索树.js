/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
  // 中序遍历刚好是有序数组
  // 可是实际上只需要比对上一个和当前就好
  let prev = {
    val: -Infinity
  }
  const dfs = (node) => {
    // console.log('node', node.val)
    if (!node.left && !node.right) {
      if (node.val <= prev.val) {
        return false
      }
      prev = node
      return true
    }
    if (node.left) {
      const res = dfs(node.left)
      // console.log('---left', prev.val, node.val)
      if (!res) return false
    }
    if (node.val <= prev.val) {
      return false
    }
    prev = node
    if (node.right) {
      const res = dfs(node.right)
      // console.log('---right', prev.val, node.val, res)
      if (!res) {
        // console.log('right false')
        return false
      }
    }
    return true
  }
  return dfs(root)
};
// @lc code=end

