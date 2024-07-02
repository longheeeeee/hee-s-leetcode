/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
var constructMaximumBinaryTree = function(nums) {
  const dfs = (_nums, start, end) => {
    if (end - start < 0) {
      return null
    }
    let maxIdx = start
    for (let i = start + 1; i <= end; i++) {
      if (_nums[i] > _nums[maxIdx]) maxIdx = i
    }
    return {
      val: _nums[maxIdx],
      left: dfs(_nums, start, maxIdx - 1),
      right: dfs(_nums, maxIdx + 1, end),
    }
  }
  return dfs(nums, 0, nums.length - 1)
};
// @lc code=end

