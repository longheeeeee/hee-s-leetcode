/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
var insertIntoBST = function(root, val) {
  if (!root) {
    return {
      val: val,
      left: null,
      right: null
    }
  }
  let cur = root
  while(cur) {
    if (cur.val > val) {
      if (!cur.left) {
        cur.left = new TreeNode(val, null, null)
        break
      }
      cur = cur.left
      continue
    }
    if (cur.val < val) {
      if (!cur.right) {
        cur.right = new TreeNode(val, null, null)
        break
      }
      cur = cur.right
    }
  }
  return root
};
// @lc code=end

