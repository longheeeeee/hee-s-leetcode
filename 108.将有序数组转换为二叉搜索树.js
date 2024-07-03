/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const dfs = (arr, start, end) => {
    if (end - start < 0) {
      return null
    }
    // if (end - start === 0) {
    //   return new Treenode(arr[start])
    // }
    const midIdx = Math.floor((end - start) / 2) + start
    const node = new TreeNode(
      arr[midIdx],
      dfs(arr, start, midIdx - 1),
      dfs(arr, midIdx + 1, end)
    )
    return node
  }
  return dfs(nums, 0, nums.length - 1)
};
// @lc code=end

