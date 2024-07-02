/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
  // 两种情况，分别在左右子树中，和当前就是其中一个，另一个在任意一边子树中
  // @return node
  const dfs = (node) => {
    if (node === p || node === q) {
      // console.log('111')
      return node
    }
    if (!node.left && !node.right) {
      return null
    }
    let left = null
    if (node.left) {
      left = dfs(node.left)
    }
    let right = null
    if (node.right) {
      right = dfs(node.right)
    }
    if (left === q && (right === p || node === p) || (right === q && (left === p || node === p))) {
      return node
    }
    return left || right
  }
  return dfs(root)
    
};
// @lc code=end

