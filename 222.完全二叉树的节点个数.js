/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
  if (!root) {
    return 0
  }
  // 返回深度
  const checkFull = (node) => {
    let left = node.left
    let right = node.right
    let depth = 1
    while(left && right) {
      left = left.left
      right = right.right
      depth++
    }
    console.log('checkFull, ', !left && !right, depth)
    return !left && !right ? depth : -1
  }
  // 返回节点个数
  const dfs = (node) => {
    // console.log('dfs, ',node.val)
    if (!node.left && !node.right) {
      return 1
    }
    const getTreeNodes = (n) => {
      if (!n) return 0
      let depth = checkFull(n)
      if (depth !== -1) {
        // return (2 ** (depth - 1)) * depth / 2
        return 2 ** depth - 1
      }
      return dfs(n)
    }
    let left = getTreeNodes(node.left)
    // console.log('left', left)
    let right = getTreeNodes(node.right)
    // console.log('right', right)
    return left + right + 1
  }
  return dfs(root)
}
var countNodes = function(root) {
  const queue = [root]
  let sum = 0
  while (queue.length) {
    const curLength = queue.length
    for (let i = 0; i < curLength; i++) {
      const item = queue.shift()  
      sum++
      if (item.left) {
        queue.push(item.left)
      }
      if (item.right) {
        queue.push(item.right)
      }
    }
  }
  return sum
};
// @lc code=end

