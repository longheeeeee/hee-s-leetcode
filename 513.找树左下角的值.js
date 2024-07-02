/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  if (!root) return 0
  const queue = [root]
  while(queue.length) {
    const curLength = queue.length
    const leftest = queue[0]
    for (let i = 0; i < curLength; i++) {
      const item = queue.shift()
      item.left && queue.push(item.left)
      item.right && queue.push(item.right)
      
    }
    if (!queue.length) {
      return leftest.val
    }
  }
  return 0
};
// @lc code=end

