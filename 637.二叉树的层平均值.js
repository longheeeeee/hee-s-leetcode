/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) {
    return []
  }
  const res = []
  const queue = [root]
  while(queue.length) {
    let curLength = queue.length
    let sum = 0
    for (let i = 0; i < curLength; i++) {
      const item = queue.shift()
      sum += item.val
      // console.log('--', item.val, sum)
      if (item.left) {
        queue.push(item.left)
      }
      if (item.right) {
        queue.push(item.right)
      }
      
    }
    // console.log(sum)
    res.push(sum / curLength)
  }
  return res
};
// @lc code=end

