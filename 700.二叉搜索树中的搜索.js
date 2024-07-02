/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let cur = root
  while(cur !== null) {
    if (cur.val === val) {
      return cur
    }
    if (cur.val > val) {
      cur = cur.left
    }
    else if (cur.val < val) {
      cur = cur.right
    }
  }
  return null

};
// @lc code=end

