/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const dfs = (inorder, postorder, inorderStart, inorderEnd, postorderStart, postorderEnd) => {
    // console.log('dfs', inorderStart, inorderEnd, postorderStart, postorderEnd)
    if (inorderEnd - inorderStart < 0 || postorderEnd - postorderStart < 0) {
      // console.log('1')
      return null
    }
    if (inorderEnd - inorderStart === 0) {
      // console.log('2')
      return {
        val: inorder[inorderStart],
        left: null,
        right: null,
      }
    }
    // 后序遍历是左右中，最后一个是根节点
    const midVal = postorder[postorderEnd]
    const midNode = {
      val: midVal,
      left: null, 
      right: null
    }
    const midNodeIdxInorder = inorder.findIndex(i => i === midVal)
    const leftLength = midNodeIdxInorder - inorderStart
    // console.log('left', inorderStart, midNodeIdxInorder - 1, postorderStart, midNodeIdxInorder - 1)
    const leftSubTree = dfs(inorder, postorder, inorderStart, midNodeIdxInorder - 1, postorderStart, postorderStart + leftLength - 1)
    // console.log('leftSubTree', leftSubTree?.val)
    const rightLength = inorderEnd - midNodeIdxInorder
    const rightSubTree = dfs(inorder, postorder, midNodeIdxInorder + 1, inorderEnd, postorderStart + leftLength, postorderEnd - 1)
    midNode.left = leftSubTree
    midNode.right = rightSubTree
    return midNode
  }
  return dfs(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1)
};
var buildTree = function(inorder, postorder) {
  const dfs = (inorder, postorder) => {
    // console.log('dfs', inorder, postorder)
    if (!inorder.length) {
      // console.log('1')
      return null
    }
    if (inorder.length === 1) {
      // console.log('2')
      return {
        val: inorder[0],
        left: null,
        right: null,
      }
    }
    // 后序遍历是左右中，最后一个是根节点
    const midVal = postorder[postorder.length - 1]
    const midNode = {
      val: midVal,
      left: null, 
      right: null
    }
    const midNodeIdxInorder = inorder.findIndex(i => i === midVal)
    // console.log('left', inorder.slice(0, midNodeIdxInorder), postorder.slice(0, midNodeIdxInorder))
    const leftSubTree = dfs(inorder.slice(0, midNodeIdxInorder), postorder.slice(0, midNodeIdxInorder))
    // console.log('leftSubTree', leftSubTree?.val)
    const rightSubTree = dfs(inorder.slice(midNodeIdxInorder + 1), postorder.slice(midNodeIdxInorder, postorder.length - 1))
    midNode.left = leftSubTree
    midNode.right = rightSubTree
    return midNode
  }
  return dfs(inorder, postorder)
};
// @lc code=end

