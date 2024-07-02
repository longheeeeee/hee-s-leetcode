/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let left, right
  [left, right] = p.val > q.val ? [q, p] : [p, q]
  const dfs = (node) => {
    if (!node.left && !node.right) {
      return null
    }
    if (node.val >= left.val && node.val <= right.val) {
      return node
    }
    if (node.left) {
      const res = dfs(node.left)
      if (res) return res
    }
    if (node.right) {
      const res = dfs(node.right)
      if (res) return res
    }
    return null
  }
  return dfs(root)
};
// @lc code=end

