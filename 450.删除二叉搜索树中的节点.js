/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return null
  const dfs = (node) => {
    if (node.val !== key) {
      if (node.left) {
        const res = dfs(node.left)
        if (res !== 0) {
          node.left = res
          return node
        }
      }
      if (node.right) {
        const res = dfs(node.right)
        if (res !== 0) {
          node.right = res
          return node
        }
      }
      return 0
    }
    // 处理命中情况
    // 情况1，直接删除节点返回null
    if (!node.left && !node.right) return null
    // 情况2/3，只有左/只有右
    if (!node.left && node.right) {
      return node.right
    }
    if (!node.right && node.left) {
      return node.left
    }
    // console.log('情况4')
    // 情况4，左右都有，则把左节点接到右子树最左边的节点上
    let cur = node.right
    while(cur?.left) {
      cur = cur.left
    }
    // console.log('cur', cur.val)
    cur.left = node.left
    return node.right
  }
  const res = dfs(root)
  if (res === 0) return root
  return res

};
// @lc code=end

